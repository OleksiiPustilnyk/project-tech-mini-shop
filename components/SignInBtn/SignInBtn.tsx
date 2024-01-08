'use client'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import NavigationLink from '../Navigation/NavigationLink'

import './SignInBtn.scss'

type NavLink = {
    label: string
    href: string
}
type Props = {
    navLinks: NavLink[]
}

const SignInBtn = ({ navLinks }: Props) => {
    const pathname = usePathname()
    const session = useSession()

    console.log(session)

    return (
        <>
            {navLinks.map(link => {
                const isActive = pathname === link.href

                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={isActive ? 'active' : ''}
                    >
                        {link.label}
                    </Link>
                )
            })}
            {session?.data && (
                <NavigationLink href='/profile'>
                    <div className='border'>
                        <span className='icon-profile'></span>
                    </div>
                </NavigationLink>
            )}
            {session?.data ? (
                <Link
                    className='button'
                    href='#'
                    onClick={() => signOut({ callbackUrl: '/' })}
                >
                    Sign Out
                </Link>
            ) : (
                <Link className='button' href='/signin'>
                    SignIn
                </Link>
            )}
        </>
    )
}

export default SignInBtn
