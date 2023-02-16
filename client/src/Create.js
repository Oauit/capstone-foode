import React, { useState } from "react";
import App from "./App.js";
import { useNavigate } from "react-router-dom";

function Create({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // console.log("hello from create");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: name,
      password: password,
    };
    fetch(`/check_name/${name}`, {
      method: 'GET', 
      headers: { "Content-Type": "application/json"},
    })
    .then((res)=> res.json())
    .then((data) => {
      if (data.exists) {
        alert("Username already exists")
      } else {
        
      
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((r) => r.json())
      .then((data) => onLogin(data))
      .then(navigate("/dishes"));
    }})
  }

  return (
    <form onSubmit={handleSubmit} className="new-account-form">
      <input
        type="text"
        placeholder="Enter a Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br></br>
      <input
        type="password"
        placeholder="Enter a Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br></br>
      <button type="submit">Create Account</button>
    </form>
  );
}

export default Create;
