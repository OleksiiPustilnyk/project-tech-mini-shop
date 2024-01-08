import NavigationLink from './NavigationLink';
import { useTranslations } from 'next-intl';

const Navigation = () => {
    const t = useTranslations('Navigation');

    return (
        <>
            <div className="grow">
                <div className="flex items-center justify-center gap-2 md:gap-8">
                    <ul className="menu-list flex gap-6 list-none   ">
                        <li>
                            <NavigationLink href="/">
                                {t('home')}
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink href="/about">
                                {t('about')}
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink href="/contacts">
                                {t('contacts')}
                            </NavigationLink>
                        </li>
                        {/* <li>
                            <NavigationLink href="/profile">
                                {t('profile')}
                            </NavigationLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Navigation;
