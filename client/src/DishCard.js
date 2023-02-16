import { useState } from "react";
import ReviewCard from "./ReviewCard.js";
import ReviewForm from "./ReviewForm.js";
import "./DishCard.css";

function DishCard({ dish, currentUser, setReview, setRender }) {
  function renderReviews() {
    return dish.reviews.map((review) => (
      <ReviewCard key={review.title} review={review} />
    ));
  }

  function renderReviewForm() {
    return (
      <ReviewForm
        setReview={setReview}
        currentUser={currentUser}
        dish={dish}
        setRender={setRender}
      />
    );
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
    <div className="dishCard">
      <h3>{dish.name}</h3>

      <img className="dishImage" src={dish.image_url} alt={dish.name} />
      <h4>Avg Rating: {dish.avg_score}</h4>
      <div>
        <button onClick={toggleReviewForm}>
          {showForm ? "Close Review Form" : "Show Review Form"}
        </button>
      </div>
      {showForm ? (
        <div className="reviewFormContainer">{renderReviewForm()}</div>
      ) : null}
      <div>
        <button onClick={toggleReviews}>
          {showReviews ? "Hide Reviews" : "Show Reviews"}
        </button>
      </div>

      {showReviews ? renderReviews() : null}
    </div>
  );
}

export default DishCard;
