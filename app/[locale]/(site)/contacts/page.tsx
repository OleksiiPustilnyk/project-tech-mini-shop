import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

type Props = {
    params: { locale: string }
}

export default function Contacts({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale)

    const t = useTranslations('Contacts')

    return <h1 className='container mx-auto flex items-center'>{t('title')}</h1>
}
