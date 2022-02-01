import React, { useRef } from 'react'

const LoginUser = ({ setUserName }) => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.value && (
            setUserName(inputRef.current.value)
        )
    }

    return (
        <div className='login_container'>
            <input
                className='input_login'
                type="text"
                ref={inputRef}
                placeholder='Enter Your Name'
            />
            <button className='btn_login' onClick={handleClick}>Let`s Go</button>
        </div>
    )
}

export default LoginUser
