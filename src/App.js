import Registration from './components/Registration';
import Login from './components/Login';
import { useState } from 'react';
import './App.scss';

function App() {
  const [ signup, setSignUp] = useState(true)
  return (
    <div className="form">
        
      <ul className="tab-group">
        <li className={`tab ${signup ? 'active':''}`}><a onClick={() => setSignUp(true)}>Sign Up</a></li>
        <li className={`tab ${!signup ? 'active':''}`}><a onClick={() => setSignUp(false)}>Log In</a></li>
      </ul>
      <div className="tab-content">
        {signup  ?<Registration />:<Login />}
      </div>
     </div> 
  );
}

export default App;
