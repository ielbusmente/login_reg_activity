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
          
            <div className="field-wrap">
            <label className={`${studentNumb!=='' ? `active highlight`:``}`}>
               Student Number<span className="req">*</span>
            </label>
            <input type="text"required autoComplete="off" onChange={(e)=>setstudentNumb(e.target.value)} value={studentNumb}/>
          </div>
          
          <div className="field-wrap">
            <label className={`${password!=='' ? `active highlight`:``}`}>
              Password<span className="req">*</span>
            </label>
            <input type="password"required autoComplete="off" onChange={(e)=>setpassword(e.target.value)} value={password}/>
          </div>
          
          {/* <p className="forgot"><a href="#">Forgot Password?</a></p> */}
          
          <div style={{display:'flex'}}>
            <button style={{width:'70%'}} className="button" onClick={()=>{
            studentNumb!=='' && password!=='' &&  alert('Welcome');
            }}>
              Log In
            </button>
            <button style={{width:'30%'}} type='button' className="button cancel" onClick={()=>{
              setstudentNumb(``)
              setpassword(``)
            }}>
              Cancel
            </button>
          </div>
          
          </form>

        </div>
        
    </div>
  )
}

export default Login