import React from 'react'

const Login = () => {
  return (
    <div>
     <div id="login">   
          <h1>Login </h1>
          
          <form action="/" method="post">
          
            <div class="field-wrap">
            <label>
               Student Number<span class="req">*</span>
            </label>
            <input type="text"required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
            <label>
              Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off"/>
          </div>
          
          <p class="forgot"><a href="#">Forgot Password?</a></p>
          
          <button class="button button-block">Log In</button>
          
          </form>

        </div>
        
    </div>
  )
}

export default Login