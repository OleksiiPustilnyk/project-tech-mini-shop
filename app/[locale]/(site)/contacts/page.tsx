import { useTranslations } from 'next-intl'

type Props = {
    params: { locale: string }
}

export default function Contacts({ params: { locale } }: Props) {
    const t = useTranslations('Contacts')

    return <h1 className='container mx-auto flex items-center'>{t('title')}</h1>
}
