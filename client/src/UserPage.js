import React from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import DishCard from "./DishCard";
import "./UserPage.css";

function UserPage({ currentUser, setCurrentUser, setRender}) {
  const navigate = useNavigate();

  function handleDeleteAccount() {
    fetch("/delete_account", {
      method: "DELETE",
    })
      .then(() => setCurrentUser(null))
      .then(navigate("/"))
      
  }
  if (!currentUser) return <h1>Loading </h1>;
  return (
    <div className="userPageContainer">
      <div className="userPageCard">
        {currentUser.reviews.map((review) => {
          return (
            <div className="reviewCard">
              <h3>Dish: {review.dish_name}</h3>
              <h4>Title: {review.title}</h4>
              <p>Desc: {review.description}</p>
              <p>Score: {review.score}</p>
            </div>
          );
        })}
      </div>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
}

export default UserPage;
