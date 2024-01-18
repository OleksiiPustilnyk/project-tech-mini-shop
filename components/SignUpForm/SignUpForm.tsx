'use client'
// import Button from '@/components/UI/Button/Button'
import { Button } from '@/components/UI/Button/ButtonReg'
import InputReg from '@/components/UI/Input/InputReg'
import { Backend_URL } from '@/lib/Constants'
import Link from 'next/link'
import React, { useRef } from 'react'

type FormInputs = {
    name: string
    email: string
    password: string
}

const SignUpForm = () => {
    const register = async () => {
        const res = await fetch(Backend_URL + '/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                name: data.current.name,
                email: data.current.email,
                password: data.current.password,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (!res.ok) {
            alert(res.statusText)
            return
        }
        const response = await res.json()
        alert('User Registered!')
        console.log({ response })
    }
    const data = useRef<FormInputs>({
        name: '',
        email: '',
        password: '',
    })

    return (
        <form className='form-register'>
            <InputReg
                autoComplete='off'
                name='name'
                labelText='Name:'
                placeholder='Name'
                required
                onChange={e => (data.current.name = e.target.value)}
            />
            <InputReg
                name='email'
                labelText='E-mail:'
                placeholder='E-mail'
                required
                onChange={e => (data.current.email = e.target.value)}
            />
            <InputReg
                name='password'
                labelText='Password:'
                placeholder='Password'
                type='password'
                required
                onChange={e => (data.current.password = e.target.value)}
            />
            <div className='flex justify-center items-center gap-2'>
                <Button onClick={register}>Submit</Button>
                <Link className='' href={'/'}>
                    Cancel
                </Link>
            </div>
        </form>
    )
}

export { SignUpForm }
