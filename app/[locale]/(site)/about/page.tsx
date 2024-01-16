import { useTranslations } from 'next-intl'

type Props = {
    params: { locale: string }
}

export default function About({ params: { locale } }: Props) {
    const t = useTranslations('About')

    return <h1 className='container mx-auto flex items-center'>{t('title')}</h1>
}
