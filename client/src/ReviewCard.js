import React from "react";

function ReviewCard({ review }) {
  return (
    <div>
      <h4>Title: {review.title}</h4>
      <p>Desc: {review.description}</p>
      <p>Score: {review.score}</p>
    </div>
  );
}

export default ReviewCard;
