import './Header.scss'
import Navigation from '../Navigation/Navigation'
import Link from 'next/link'
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher'
import { useTranslations } from 'next-intl'
import SignInBtn from '../SignInBtn/SignInBtn'

export default function Header() {
    const t = useTranslations('Navigation')

    return (
        <div className='container mx-auto flex items-center border-b-2 px-6 py-2 h-24'>
            <Link href='/'>
                <h1 className='logo font-bold text-2xl cursor-pointer'>
                    Tech-MiniShop
                </h1>
            </Link>

            <Navigation />
            <SignInBtn navLinks={[]} />
            <LocaleSwitcher />
        </div>
    )
}
