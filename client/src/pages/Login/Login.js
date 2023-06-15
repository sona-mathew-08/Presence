// import React from 'react'
import './Login.css'

// const Login = () => {
//   return (
//     <section classNameName="bg login">
//       <div classNameName="login-box">
//         <h2>Login</h2>
//         <form>
//           <div classNameName="user-box">
//             <input type="text" name="" required=""/>
//             <label>Username</label>
//           </div>
//           <div classNameName="user-box">
//             <input type="password" name="" required=""/>
//             <label>Password</label>
//           </div>
//           <a href="#">
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//             Submit
//           </a>
//         </form>
//       </div>
//   </section>
//   )
// }

// export default Login

import React from 'react'

const Login = () => {
  return (
    <section className='bg2 '>
    <div className="container" id="container">
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social" ><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social google"><i className="fab fa-google-plus-g" ></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Login</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social google"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#" style={{fontSize:"12px"}}>Forgot your password?</a>
                    <button style={{marginTop:"5px"}}>Login</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        
                        {/* <button className="ghost" id="signIn">Sign In</button> */}
                    </div>
                    <div className="overlay-panel overlay-right">
                        
                        {/* <button className="ghost" id="signUp">Sign Up</button> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login