'use client'

import Input from '@/components/UI/Input/Input'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FormEventHandler } from 'react'

const SignInForm = () => {
    const router = useRouter()

    const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        })

        if (res && !res.error) {
            router.push('/profile')
        } else {
            console.log(res)
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <Input type='email' name='email' placeholder='Email'>
                E-mail:
            </Input>
            <Input type='password' name='password' placeholder='Password'>
                Password:
            </Input>

            <button type='submit' className='button'>
                Sign In
            </button>
        </form>
    )
}

export { SignInForm }
