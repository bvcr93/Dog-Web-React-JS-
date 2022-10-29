import React, { useContext, useState } from 'react'
import "../styles/Login.css"
import { UserContext } from '../components/UserContext'
const Login = () => {
 
  const {isAuth, setIsAuth} = useContext(UserContext)

  return (
    <div className='login-container'>
      <div className="sign-in">
      <input type="text" placeholder='First Name...'/>
      <input type="text" placeholder='Last Name...'/>
      <input type="email" placeholder='Email...' />
      <button  className='sign-in-btn' onClick={() => setIsAuth(true)} >Sign in</button>
      </div>
    </div>
  )
}

export default Login