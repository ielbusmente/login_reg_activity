import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [ signup, setSignUp] = useState(false)
  return (
    <div class="form">
      <div class="tab-content">
        {signup  ?<Registration />:<Login />}
      </div>
     </div> 
  );
}

export default App;
