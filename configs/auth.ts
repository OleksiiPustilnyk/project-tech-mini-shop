import type { AuthOptions, User } from 'next-auth'
import GoggleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDatabase } from '@/helpers/server-helpers'
import prisma from '@/prisma'
import bcrypt from 'bcrypt'
import { Backend_URL } from '@/lib/Constants'
import { JWT } from 'next-auth/jwt'

async function refreshToken(token: JWT): Promise<JWT> {
    const res = await fetch(Backend_URL + '/auth/refresh', {
        method: 'POST',
        headers: {
            authorization: `Refresh ${token.backendTokens.refreshToken}`,
        },
    })
    console.log('refreshed')

    const response = await res.json()

    return {
        ...token,
        backendTokens: response,
    }
}

export const authConfig: AuthOptions = {
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'jsmith',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                if (!credentials?.username || !credentials?.password)
                    return null
                const { username, password } = credentials
                const res = await fetch(Backend_URL + '/auth/signin', {
                    method: 'POST',
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                console.log(res)
                if (res.status == 401) {
                    console.log(res.statusText)

                    return null
                }

                const user = await res.json()
                return user
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, ...user }

            if (new Date().getTime() < token.backendTokens.expiresIn)
                return token

            return await refreshToken(token)
        },

        async session({ token, session }) {
            session.user = token.user
            session.backendTokens = token.backendTokens

            return session
        },
    },
    pages: {
        signIn: '/signin',
    },
}
