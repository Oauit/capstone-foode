import {useState} from 'react'

function ReviewCard({review}) {

    

  return (
    <div>
        
        
        <h4>{review.title}</h4>
        <p>{review.description}</p>
        
    </div>
  )
}

export default ReviewCard