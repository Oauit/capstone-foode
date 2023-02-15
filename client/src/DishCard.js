import { useState } from "react";
import ReviewCard from "./ReviewCard.js";
function DishCard({ dish, currentUser }) {
  function renderReviews() {
    return dish.reviews.map((review) => (
      <ReviewCard key={review.title} review={review} />
    ));
  }

  const [showReviews, setShowReviews] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div>
      <h3>{dish.name}</h3>
      <img
        src={dish.image_url}
        alt={dish.name}
        style={{ maxHeight: "100px" }}
      />
      <button onClick={toggleReviews}>
        {showReviews ? "Hide Reviews" : "Show Reviews"}
      </button>
      
      {showReviews ? renderReviews() : null}
    </div>
  );
}

export default DishCard;
