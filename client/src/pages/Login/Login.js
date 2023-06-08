import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <section className="bg login">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""/>
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
  </section>
  )
}

export default Login