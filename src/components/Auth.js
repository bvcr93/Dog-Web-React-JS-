import React from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = ({authenticate}) => {

    const navigate = useNavigate()
    const onClick = () => {
        authenticate()
        navigate("details")
    }
  return (
    <div>
        <h2>please authenticate to continue</h2>
        <button onClick={onClick}>authenticate</button>
    </div>
  )
}

export default Auth