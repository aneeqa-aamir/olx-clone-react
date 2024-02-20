import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {register} from '../../Config/firebase'
import "./App.css"
function Register() {
    const navigate = useNavigate()
    const [fullName, setFullName]=useState()
    const [age,setAge]=useState()
    const [email, setEmail] = useState()
    const [password, setPassword]= useState()

    const signup =async () => {
      try{
         await register({email,password,age,fullName})
         navigate('/')
      }catch(e){
        alert(e.message) 
    }}

  return (
  
     
<div className="page-content">
  <div className="form-v7-content">
    <div className="form-left">
      <img src="https://colorlib.com/etc/regform/colorlib-regform-33/images/form-v7.jpg" alt="form" />
      <p className="text-1">Sign Up</p>
      <p className="text-2">Privacy Policy & Term of Service</p>
    </div>
    <div className="form-detail" action="#" method="post" id="myform">
    <div className="form-row">
                  <label htmlFor="username">USERNAME</label>
                  <input type="text" name="username" id="username" className="input-text" onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="form-row">
                  <label htmlFor="password">Age</label>
                  <input type="typ" name="password" id="password" className="input-text" required onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className="form-row">
                  <label htmlFor="your_email">E-MAIL</label>
                  <input type="text" name="your_email" id="your_email" className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-row">
                  <label htmlFor="comfirm_password">PASSWORD</label>
                  <input type="password" name="comfirm_password" id="comfirm_password" className="input-text" required    onChange={(e) => setPassword(e.target.value)}/>
                </div>
      <div className="form-row-last">
        <button className="register" onClick={signup}>Register</button>
        <p>Or <a style={{cursor:'pointer'}} onClick={() => navigate('/login')}>Sign in</a></p>
      </div>
    </div>
  </div>
</div>



    // <div>
    // <h2>Register</h2>
    // <input placeholder='full name' onChange={(e) => setFullName(e.target.value)}/>
    // <input placeholder='age' onChange={(e) => setAge(e.target.value)}/>
    // <input placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
    // <input placeholder='password' onChange={(e) => setPassword(e.target.value)}/>

    // <br/><br/>
    // <button onClick={signup}> Register</button>
    // <p> Already have an account.
    // <span onClick={() => navigate ('/login')}>Login</span></p>
      
    // </div>
  )
}

export default  Register
