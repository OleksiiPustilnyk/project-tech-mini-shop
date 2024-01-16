import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'uk'] as const

export const pathnames = {
    '/': '/',
    '/about': '/about',
    '/contacts': '/contacts',
    '/profile': '/profile',
} satisfies Pathnames<typeof locales>

export const localePrefix = 'as-needed'

export type AppPathnames = keyof typeof pathnames
