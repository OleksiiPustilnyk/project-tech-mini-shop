import { useTranslations } from 'next-intl'
import Link from 'next/link'

import './Sidebar.scss'
import NavigationLink from '../Navigation/NavigationLink'

export default function Sidebar() {
    const t = useTranslations('Sidebar')
    return (
        <div className='sidebar rounded-b-xl h-[fit-content]'>
            <h3 className='sidebar-title'>{t('categories')}:</h3>
            <ul className='sidebar-category   list-none  '>
                <li>
                    <NavigationLink href='/iphone'>iPhone</NavigationLink>
                </li>
                <li>
                    <NavigationLink href='/watch'>Watch</NavigationLink>
                </li>
                <li>
                    <NavigationLink href='/macbook'>Macbook</NavigationLink>
                </li>
            </ul>
        </div>
    )
}
