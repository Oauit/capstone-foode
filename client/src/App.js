// import { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import Dish from "./Dish.js";

// import Login from "./Login.js";
// import NavBar from "./NavBar.js";
// import Create from "./Create.js";
// function App() {
//   const [currentUser, setCurrentUser] = useState("");

//   useEffect(() => {
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setCurrentUser(user));
//       }
//     });
//   }, []);

//   // if (!currentUser) {
//   //   return <Login onLogin={setCurrentUser} />;
//   // }

//   return (
//     <div>
//       {currentUser ? (
//         <Routes>
//           <Route path='*' element={<Dish/>}/>
//         </Routes>
//       ) : (
//         <Login currentUser={currentUser} setCurrentUser={setCurrentUser} onLogin={setCurrentUser}/>
//       )}

//     </div>
//   );
// }
// export default App;

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Dishes from "./Dishes.js";
import Login from "./Login.js";
import NavBar from "./NavBar.js";
import Create from "./Create.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route
          path="/"
          element={<Login currentUser={currentUser} onLogin={setCurrentUser} />}
        />
        <Route path="/dishes" element={<Dishes currentUser={currentUser} />} />
        <Route
          path="/create"
          element={
            <Create currentUser={currentUser} onLogin={setCurrentUser} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
