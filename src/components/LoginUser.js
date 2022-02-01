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

            <div className='about_me'>
                <a href='https://www.instagram.com/hossein_offical_/' target="_blank" >Desgin By Hossein Ghiasi</a>
                {/* <a  rel="noreferrer">Hossein</a> */}
            </div>
        </div>
    )
}

export default LoginUser
