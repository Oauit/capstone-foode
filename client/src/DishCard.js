import { useState } from "react";
import ReviewCard from "./ReviewCard.js";
import ReviewForm from "./ReviewForm.js";

function DishCard({ dish, currentUser, setReview, setRender}) {
  function renderReviews() {
    return dish.reviews.map((review) => (
      <ReviewCard key={review.title} review={review} />
    ));
  }

  function renderReviewForm() {
    return <ReviewForm setReview={setReview} currentUser={currentUser} dish={dish} setRender={setRender}/>
  }

  function renderForm() {}
  const [showReviews, setShowReviews] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  const toggleReviewForm = () => {
    setShowForm(!showForm);
  };

  

  return (
    <div>
      <h3>{dish.name}</h3>
      <h4>{dish.avg_score}</h4>
      <img
        src={dish.image_url}
        alt={dish.name}
        style={{ maxHeight: "100px" }}
      />
      <button onClick={toggleReviewForm} >
        {showForm ? "Close Review Form" : "Show Review Form"}
      </button>
      {showForm ? renderReviewForm() : null}
      <button onClick={toggleReviews}>
        {showReviews ? "Hide Reviews" : "Show Reviews"}
      </button>
      {showReviews ? renderReviews() : null}
    </div>
  );
}

export default DishCard;
