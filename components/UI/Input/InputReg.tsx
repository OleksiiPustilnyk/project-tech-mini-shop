import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText?: string
    error?: string
}

const InputReg = ({ labelText, error, ...props }: Props) => {
    return (
        <>
            <label className='input '>
                {labelText}
                <input {...props}></input>
            </label>
        </>
    )
}

export default InputReg
