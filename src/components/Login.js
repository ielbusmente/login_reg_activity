import React, { useState } from 'react'

const Login = () => {
  const [studentNumb, setstudentNumb] = useState(``) 
  const [password, setpassword] = useState(``) 
  return (
    <div>
     <div id="login">   
          <h1>Login </h1>
          
          <form 
          // action="/" method="post"
          >
          
            <div class="field-wrap">
            <label className={`${studentNumb!=='' ? `active highlight`:``}`}>
               Student Number<span class="req">*</span>
            </label>
            <input type="text"required autocomplete="off" onChange={(e)=>setstudentNumb(e.target.value)} value={studentNumb}/>
          </div>
          
          <div class="field-wrap">
            <label className={`${password!=='' ? `active highlight`:``}`}>
              Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off" onChange={(e)=>setpassword(e.target.value)} value={password}/>
          </div>
          
          {/* <p class="forgot"><a href="#">Forgot Password?</a></p> */}
          
          <button class="button button-block" onClick={()=>{
           studentNumb!=='' && password!=='' &&  alert('Welcome');
          }}>
            Log In
          </button>
          <button type='button' class="button button-block" onClick={()=>{
            setstudentNumb(``)
            setpassword(``)
          }}>
            Cancel
          </button>
          
          </form>

        </div>
        
    </div>
  )
}

export default Login