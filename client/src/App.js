import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dish from "./Dish.js";
import Dishes from "./Dishes.js";
import Login from "./Login.js";
import NavBar from "./NavBar.js";
function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  if (!currentUser) {
    return <Login onLogin={setCurrentUser} />;
  }

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Dishes currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
      </Routes>
    </div>
  );
}
export default App;
