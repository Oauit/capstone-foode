import {useState} from "react";

function ReviewForm({setReview, currentUser, dish, setRender}) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [score, setScore] = useState(0)

    function handleFormSubmit(e) {
        e.preventDefault();
        const review = {
            title: title,
            description: description,
            score: score,
            user_id: currentUser.id,
            dish_id: dish.id
            
        };
        fetch('/create_review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review),
        })
        .then((r) => r.json())
        .then((data) => setReview(data))
        setRender(true);
        
    }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number" name="Score" min="1" max="5"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
