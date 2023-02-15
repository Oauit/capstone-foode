// import { useState, useEffect } from "react";
// import DishCard from "./DishCard.js";

// function Dishes({ currentUser }) {
//   const [dishes, setDishes] = useState([]);

//   useEffect(() => {
//     fetch("/dishes")
//       .then((resp) => resp.json())
//       .then((data) => setDishes(data));
//   }, []);

//   const mappedDishes = () => {
//     return dishes.map((dish) => {
//       return (
//         <ul>
//           DishCard setDishes={setDishes} dish={dish} currentUser={currentUser}
//         </ul>
//       );
//     });
//   };
//   return (
//     <div>
//       <h1>Dishes {mappedDishes}</h1>
//       {/* <ul>
//           {dishes.map(dish => (
//             <li key={dish.id}>{dish.name}</li>
//           ))}
//         </ul> */}
//     </div>
//   );
// }

// export default Dishes;

import { useState, useEffect } from "react";
import DishCard from "./DishCard.js";



function Dishes({ currentUser }) {
  const [dishes, setDishes] = useState([]);

  // useEffect(() => {
  //   fetch("/dishes")
  //     .then((resp) => resp.json())
  //     .then((data) => setDishes(data));
  //     console.log(dishes)
  // },[]);

  useEffect(() => {
    const fetchDishes = async()=>{
      const response = await fetch('/dishes')
      const dishes = await response.json()
      setDishes(dishes)
    }
    fetchDishes();
  },[])

  const mappedDishes = () => {
    if (!dishes) return (
      <h1>Loading </h1>
    )
    else
    return (
      <ul>
        {dishes.map((dish) => <DishCard key={dish.name} setDishes={setDishes} dish={dish} currentUser={currentUser} />)}
      </ul>
    )
  };

  return (
    <div>
      
      
        <ul>{mappedDishes()}</ul>
      
        
      
    </div>
  );
}

export default Dishes;

