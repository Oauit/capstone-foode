// import { useState, useEffect } from "react";

// import './App.css'
// import DishCard from "./DishCard.js";


// function Dish({currentUser,avgScore,setScore }) {


//     const [dishes,setDishes]= useState([])

//     useEffect(() =>{
//         fetch('/dishes')
//         .then((response) => response.json())
//         .then((data)=>setDishes(data));
//     },[]);

// const mappedDishes =()=>{ 
    
//     return dishes.map((dish) =>{
       
//   return( <ul><DishCard setDishes={setDishes} dish={dish} currentUser={currentUser}  avgScore={avgScore} setScore={setScore}/></ul>)
// })}
// return (
    
//     <div>
//         <h1>Welcome {currentUser.username}!</h1>
//         <h1 className="dish-review" style={{ textAlign: 'center'}}>Score</h1>
        
        
//         <h2 style={{ textAlign: 'center' }}>Available Dishes:</h2>
//         <div>
//               {mappedDishes()}  
//         </div>
        

//     </div>
// )
// }

// export default Dish;