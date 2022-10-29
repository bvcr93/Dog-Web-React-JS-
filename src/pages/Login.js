import React, { useState } from 'react'
import "../styles/Login.css"

const Login = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className='login-container'>
      <div className="sign-in">
      <input type="text" placeholder='First Name...'/>
      <input type="text" placeholder='Last Name...'/>
      <input type="email" placeholder='Email...' />
      <button >Sign in</button>
      </div>
    </div>
  )
}

export default Login