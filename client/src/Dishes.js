import { useState, useEffect } from "react";
import DishCard from "./DishCard.js";

function Dishes({ currentUser }) {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("/dishes")
      .then((resp) => resp.json())
      .then((data) => setDishes(data));
  }, []);

  const mappedDishes = () => {
    return dishes.map((dish) => {
      return (
        <ul>
          DishCard setDishes={setDishes} dish={dish} currentUser={currentUser}
        </ul>
      );
    });
  };
  return (
    <div>
      <h1>Dishes</h1>
      {/* <ul>
          {dishes.map(dish => (
            <li key={dish.id}>{dish.name}</li>
          ))}
        </ul> */}
    </div>
  );
}

export default Dishes;
