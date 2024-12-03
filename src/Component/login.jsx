import { useState } from 'react';
import './login.css';

export default function Login() {
    let [logIn, setLogin] = useState(false);

    function handleLogin() {
        setLogin(!logIn);
    }

    return (
        <>
        <div className='mainLog'>
            
          <div className="login">
             <input placeholder="Enter email" /><br />
             <input type="password" placeholder="Enter password" /><br />
             <button onClick={handleLogin}>
                {logIn ? "Logout" : "Login"}
             </button>
          </div>
        </div>
        </>
    );
}
