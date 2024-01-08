import { Inter } from 'next/font/google'
import '../../styles/globals.css'
import { ReactNode } from 'react'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { Providers } from '@/components/Providers/Providers'
import Header from '@/components/Header/Header'
import { locales } from '@/config'

const inter = Inter({ subsets: ['latin'] })

type Props = {
    children: ReactNode
    params: { locale: string }
}

export function generateStaticParams() {
    return locales.map(locale => ({ locale }))
}

export async function generateMetadata({
    params: { locale },
}: Omit<Props, 'children'>) {
    const t = await getTranslations({ locale })

    return {
        title: t('title'),
    }
}

export default function RootLayout({
    children,
    params: { locale },
}: {
    children: ReactNode
    params: { locale: string }
}) {
    return (
        <html lang={locale}>
            <body className={inter.className}>
                <Providers>
                    <header>
                        <Header />
                    </header>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
