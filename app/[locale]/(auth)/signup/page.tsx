'use client'

import { SignUpForm } from '@/components/SignUpForm/SignUpForm'

const SignupPage = () => {
    return (
        <div>
            <h1 className='container mx-auto flex items-center flex-col'>
                Registration
            </h1>
            <SignUpForm />
        </div>
    )
}

export default SignupPage
