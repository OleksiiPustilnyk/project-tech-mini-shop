// import { authConfig } from '../../../../../configs/auth'
// import NextAuth from 'next-auth'

// const handler = NextAuth(authConfig)

// export { handler as GET, handler as POST }

import { authConfig } from '@/configs/auth'
import { Backend_URL } from '@/lib/Constants'

import { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }
