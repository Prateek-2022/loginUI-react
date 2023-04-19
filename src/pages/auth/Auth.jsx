import React, { useState } from 'react'
import "./Auth.css"

const Auth = () => {
    const [register,setRegister] = useState(false);
    const [showPassword,setShowPassword] = useState(false);


  return (
    <div className="form-container">
        <div className='login-form'>
            <div className="RnL-btn">
                <button className={register?"btn":"toggle btn"} onClick={() => {setRegister(true)}}>REGISTER</button> 
                <button className={!register?"btn":"toggle btn"} onClick={() => {setRegister(false)}}>LOGIN</button>
            </div>
            {register ?
            <div className="userName">
                <p>Name</p>
                <input placeholder='userName' id="userName" type="text"/>
            </div>:null}
            <div className="user">
                <p>Email</p>
                <input placeholder='Email' id="email" type="text"/>
            </div>
            <div className="pass">
                <p>Password</p>
                <input placeholder='password' id="password" type={showPassword?"text":"password"}/>
            </div>
            <div className="login-btn"><button className='btn' onClick={() => setShowPassword(!showPassword)}>LOGIN TO ACCOUNT</button></div>
        </div>
    </div>
  )
}

export default Auth