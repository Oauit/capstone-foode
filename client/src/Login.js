import { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
import Create from "./Create";

function Login({ onLogin, currentUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="form-container">
      <h2 className="log-in-title">Food-E</h2>
      {showLogin ? (
        <div className="form-container">
          <LoginForm onLogin={onLogin} />
          <div className="switch-form">
            <p>Don't have an account?</p>
            <button onClick={() => setShowLogin(false)}>Create Account</button>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <Create onLogin={onLogin} />
          <div className="switch-form">
            <p>Already have an account?</p>
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
