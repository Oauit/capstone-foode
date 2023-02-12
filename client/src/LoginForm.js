import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Dishes from './Dishes'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({onLogin}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Invalid password');
      })
      .then((data) => {
        onLogin(data)
        navigate('/home')
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <input
        type="text"
        id="name"
        placeholder='Name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <input
        type="password"
        id="password"
        placeholder='Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      {error && <p>{error}</p>}
      <button type="submit" className='login-button'>Login</button>
      <Routes>
        <Route exact path='/home' element ={<Dishes/>}></Route>
      </Routes>
    </form>
  );
};

export default LoginForm;
