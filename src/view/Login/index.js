import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {login} from '../../Config/firebase'
import "./App.css"

export default function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate()

    const signIn = async () => {
      try{
         await login({email ,password})
        navigate('/')
    }catch (e) {
      alert(e.message)
    }
  }
  return (
<div className="page-content">
  <div className="form-v7-content">
    <div className="form-left">
      <img src="https://colorlib.com/etc/regform/colorlib-regform-33/images/form-v7.jpg" alt="form" />
      <p className="text-1">Sign In</p>
      <p className="text-2">Privacy Policy & Term of Service</p>
    </div>
    <div className="form-detail" action="#" method="post" id="myform">
    
                <div className="form-row">
                  <label htmlFor="your_email">E-MAIL</label>
                  <input type="text" name="your_email" id="your_email" className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-row">
                  <label htmlFor="comfirm_password">PASSWORD</label>
                  <input type="password" name="comfirm_password" id="comfirm_password" className="input-text" required    onChange={(e) => setPassword(e.target.value)}/>
                </div>
      <div className="form-row-last">
        <button className="register" onClick={signIn}>login</button>
        <p>Or <a style={{cursor:'pointer'}} onClick={() => navigate('/register')}>Sign up</a></p>
      </div>
    </div>
  </div>
</div>


    // <div>
    // <h2>LOGIN</h2>
    //  <input placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
    //  <input placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
      
    //   <br/><br/>
    //   <button onClick={signIn}>LOGIN</button>
    //   <hr/>

    // <p>Don't you have an account.<span onClick={() => navigate ('/')}>click Here</span></p>
    // </div>
  )
}

  