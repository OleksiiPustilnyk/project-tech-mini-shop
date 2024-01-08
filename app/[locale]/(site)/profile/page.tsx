import { authConfig } from '@/configs/auth';
import { getServerSession } from 'next-auth';

import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
    params: { locale: string };
};

export default async function Profile({ params: { locale } }: Props) {
    const session = await getServerSession(authConfig);

    unstable_setRequestLocale(locale);

    const t = await getTranslations('Profile');

    return (
        <div className="container mx-auto flex items-center">
            <h1>
                {t('title')} {session?.user?.name}
            </h1>
            {session?.user?.image && <img src={session.user.image} alt="" />}
        </div>
    );
}
