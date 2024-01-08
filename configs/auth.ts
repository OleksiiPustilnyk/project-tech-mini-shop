import type { AuthOptions, User } from 'next-auth';
import GoggleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { connectToDatabase } from '@/helpers/server-helpers';
import prisma from '@/prisma';
import bcrypt from 'bcrypt';

export const authConfig: AuthOptions = {
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                password: {
                    label: 'password',
                    type: 'password',
                    required: true,
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;
                try {
                    await connectToDatabase();
                    const currentUser = await prisma.user.findFirst({
                        where: { email: credentials.email },
                    });

                    if (!currentUser?.hashedPassword) {
                        return null;
                    }

                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        currentUser.hashedPassword,
                    );
                    if (isPasswordCorrect) {
                        return currentUser;
                    }

                    return null;
                } catch (error) {
                    console.log(error);

                    return null;
                } finally {
                    await prisma.$disconnect();
                }
            },
        }),
    ],
    pages: {
        signIn: '/signin',
    },
};
