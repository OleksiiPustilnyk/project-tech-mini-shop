'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import NavigationLink from '../Navigation/NavigationLink'

import './SignInBtn.scss'

const SignInButton = () => {
    const { data: session } = useSession()
    console.log({ session })

    if (session && session.user)
        return (
            <div className='flex gap-4 ml-auto items-center '>
                <NavigationLink href='/profile'>
                    <div className='border'>
                        <span className='icon-profile'></span>
                    </div>
                </NavigationLink>
                <Link href={'/api/auth/signout'} className='button'>
                    Sign Out
                </Link>
            </div>
        )

    return (
        <div className='flex gap-4 ml-auto items-center '>
            <Link href={'/api/auth/signin'} className='button'>
                Sign In
            </Link>
            <Link href={'/signup'} className='button'>
                Sign Up
            </Link>
        </div>
    )
}

export default SignInButton
