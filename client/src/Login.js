import { useState} from 'react';

import LoginForm from './LoginForm';
import Create from './Create';

function Login({ onLogin, currentUser}) {
    const [showLogin, setShowLogin] = useState(true)
    return (
        <>
          <h1 className='log-in-title'>Food-E</h1>
            {showLogin ? (
              <>
                <LoginForm onLogin={onLogin} />
                <div style={{ textAlign: 'center'}}>
                  <p style={{ fontStyle: 'italic'}}>No Account?</p>
                  <button onClick={() => setShowLogin(false)} className='sign-up-button'>Sign Up</button>
                </div>
        </>
            ) : (
              <>
                <Create onLogin={onLogin} />
                <div style={{ textAlign: 'center'}}>
                  <p style={{ textAlign: 'center', fontStyle: 'italic'}}>Already have an account?</p>
                  <button onClick={() => setShowLogin(true)} className='back-to-login-button'>Back to Login</button>
                </div>
              </>
              
            )}
            
        </>
          
    );
}

export default Login;