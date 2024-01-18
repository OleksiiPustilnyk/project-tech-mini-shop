import type { AuthOptions, User } from 'next-auth'
import GoggleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
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
        Credentials({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) return null
                const { email, password } = credentials
                const res = await fetch(Backend_URL + '/auth/signin', {
                    method: 'POST',
                    body: JSON.stringify({
                        email,
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
