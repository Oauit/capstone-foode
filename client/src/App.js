import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import Dishes from "./Dishes.js";
import Login from "./Login.js";
import NavBar from "./NavBar.js";
import Create from "./Create.js";
import UserPage from './UserPage.js'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [review, setReview] = useState("");
  const [dataFetch, setDataFetch] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (render || !dataFetch) {
      
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
      setRender(false)
    });}
  }, [render, dataFetch]);

  return (
    <>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route
          path="/"
          element={<Login currentUser={currentUser} onLogin={setCurrentUser} />}
        />
        <Route
          path="/dishes"
          element={<Dishes currentUser={currentUser} setReview={setReview} dataFetch={dataFetch} render={render} setRender={setRender}/>}
        />
        <Route
          path="/create"
          element={
            <Create currentUser={currentUser} onLogin={setCurrentUser} />
          }
        />
        <Route
          path="/user"
          element={
            <UserPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          }
        />
      </Routes>
    </>
  );
}

export default App;
