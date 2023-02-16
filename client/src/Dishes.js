import { useState, useEffect } from "react";
import DishCard from "./DishCard.js";

function Dishes({ currentUser, setReview }) {
  const [dishes, setDishes] = useState([]);
  const [dataFetch, setDataFetch] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (render || !dataFetch) {
      const fetchDishes = async () => {
        const response = await fetch("/dishes");
        const dishes = await response.json();
        setDishes(dishes);
        setRender(false);
      };
      fetchDishes();
    }
  }, [render, dataFetch]);

  const mappedDishes = () => {
    if (!dishes) return <h1>Loading </h1>;
    else
      return (
        <ul>
          {dishes.map((dish) => (
            <DishCard
              key={dish.name}
              setDishes={setDishes}
              dish={dish}
              currentUser={currentUser}
              setReview={setReview}
              setRender={setRender}
            />
          ))}
        </ul>
      );
  };

  return (
    <div>
      <ul>{mappedDishes()}</ul>
    </div>
  );
}

export default Dishes;
