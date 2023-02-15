import React from "react";
import { useNavigate } from "react-router-dom";


function NavBar({setCurrentUser, currentUser}) {
  console.log(currentUser)
  const navigate = useNavigate()
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
    .then(()=>setCurrentUser(null))
    .then(navigate('/'))
    
  }
  
  return (
    <div>
      <h5>Spoon Korean Restaurant</h5>
      <div>
        {!currentUser ? null : <button onClick={handleLogout}>logout</button>}
        
      </div>
    </div>
  );
}

export default NavBar;