import { useTranslations } from 'next-intl';
import Link from 'next/link';

import './Sidebar.scss';

export default function Sidebar() {
    const t = useTranslations('Sidebar');
    return (
        <div className="sidebar rounded-b-xl h-[fit-content]">
            <h3 className="sidebar-title">{t('categories')}:</h3>
            <ul className="sidebar-category  gap-6 list-none  ">
                <li>
                    <Link href="/iphone">iPhone</Link>
                </li>
                <li>
                    <Link href="/watch">Watch</Link>
                </li>
                <li>
                    <Link href="/macbook">Macbook</Link>
                </li>
            </ul>
        </div>
    );
}
