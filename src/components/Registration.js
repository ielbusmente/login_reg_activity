import React , { useState }  from 'react';


const Registration = () => {
    const [studentNumb, setstudentNumb] = useState(``) 
    const [lastName, setlastName] = useState(``) 
    const [firstName, setfirstName] = useState(``) 
    const [middleName, setmiddleName] = useState(``) 
    const [college, setcollege] = useState(``) 
    const [program, setprogram] = useState(``) 
    const [yearLevel, setyearLevel] = useState(``)
    const [password, setpassword] = useState(``) 
    const [confirmPassword, setConfirmPassword] = useState(``) 
  return (
    <div>
      <div id="signup">   
          <h1>Registration</h1>
          
          <form 
        //   action="/" method="post"
          >

          <div class="field-wrap">
            <label className={`${studentNumb!=='' ? `active highlight`:``}`}>
              Student Number<span class="req">*</span>
            </label>
            <input type="text"required autocomplete="off" onChange={(e)=>setstudentNumb(e.target.value)} value={studentNumb}/>
          </div>

          <div class="top-row">
            <div class="field-wrap">
              <label className={`${lastName!=='' ? `active highlight`:``}`}>
                Last Name<span class="req">*</span>
              </label>
              <input type="text" required autocomplete="off" onChange={(e)=>setlastName(e.target.value)} value={lastName} />
            </div>
        
            <div class="field-wrap">
              <label className={`${firstName!=='' ? `active highlight`:``}`}>
                First Name<span class="req">*</span>
              </label>
              <input type="text"required autocomplete="off" onChange={(e)=>setfirstName(e.target.value)} value={firstName} />
            </div>
            
          </div>

          <div class="field-wrap">
              <label className={`${middleName!=='' ? `active highlight`:``}`}>
                Middle Name<span class="req">*</span>
              </label>
              <input type="text"required autocomplete="off" onChange={(e)=>setmiddleName(e.target.value)} value={middleName}/>
            </div>

          <div class="field-wrap">
            <label className={`${college!=='' ? `active highlight`:``}`}>
              College<span class="req">*</span>
            </label>
            <input type="text"required autocomplete="off"onChange={(e)=>setcollege(e.target.value)} value={college}/>
          </div>

          <div class="field-wrap">
            <label className={`${program!=='' ? `active highlight`:``}`}>
              Program Enrolled<span class="req">*</span>
            </label>
            <input type="text"required autocomplete="off" onChange={(e)=>setprogram(e.target.value)} value={program}/>
          </div>

          <div class="field-wrap">
            <label className={`${yearLevel!=='' ? `active highlight`:``}`}>
              Year Level<span class="req">*</span>
            </label>
            <input type="text"required autocomplete="off" onChange={(e)=>setyearLevel(e.target.value)} value={yearLevel}/>
          </div>
          
          <div class="field-wrap">
            <label className={`${password!=='' ? `active highlight`:``}`}>
              Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off" onChange={(e)=>setpassword(e.target.value)} value={password}/>
          </div>
          
          <div class="field-wrap">
            <label className={`${confirmPassword!=='' ? `active highlight`:``}`}>
              Confirm Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
          </div>

          <button class="button button-block" onClick={()=>{
           studentNumb!=='' 
           && firstName!==''
           && lastName!==''
           && middleName!==''
           && college!==''
           && program!==''
           && yearLevel!==''
           && password!==''
           && confirmPassword!==''
            &&  alert('Inputted Details are being saved');
          }}>
            Submit
          </button>
          <br />
          <button type='button' class="button button-block" onClick={()=>{
            setstudentNumb(``)
            setfirstName(``)
            setlastName(``)
            setmiddleName(``)
            setcollege(``)
            setprogram(``)
            setyearLevel(``)
            setpassword(``)
            setConfirmPassword(``)
          }}>
            Cancel
          </button>
          
          </form>

        </div> 
    </div>
  )
}

export default Registration