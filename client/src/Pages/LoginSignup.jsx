import React from 'react';
import './loginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
         <div className='loginsignup-container'>
              <h1>Sign Up</h1>
         

              <div className='loginsignup-fields'>
                   <input type="text" placeholder='Enter Your Name' />
                  <input type="email" placeholder='Enter Your Email' />
                  <input type="password" placeholder='Enter Your password' />
               </div>

               <button>Continue</button>
               <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
           </div>
    </div>
  )
}

export default LoginSignup;