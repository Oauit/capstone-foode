import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar({ setCurrentUser, currentUser }) {
  const navigate = useNavigate();
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
      .then(() => setCurrentUser(null))
      .then(navigate("/"));
  }

  function goToUser() {
    navigate("/user");
  }

  function goHome() {
    navigate("/dishes");
  }

  return (
    <div className="navbar">
      <h5>Spoon Korean Restaurant</h5>

      <div>
        {!currentUser ? null : (
          <button onClick={goToUser}>{currentUser.name}'s Page</button>
        )}
        {!currentUser ? null : <button onClick={goHome}>Home</button>}
        {!currentUser ? null : <button onClick={handleLogout}>Log Out</button>}
      </div>
    </div>
  );
}

export default NavBar;
