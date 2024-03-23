import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import "./Food.css";
const Food = () => {
  const imageUrl = 'https://as1.ftcdn.net/v2/jpg/01/29/75/62/1000_F_129756209_jzrdjAiwfZjqsN2kZ49hkoRHkVfO3Wnc.jpg'; // Image URL

  return (
    <div className="food-card-container"> {/* Container with styles */}
      <img src={imageUrl} alt="Healthy Food Ingredients" className="food-card-image" /> {/* Image with alt text */}
      <div className="food-card-content">
       
       
        <Link to="http://127.0.0.1:8000/">
          <button className="food-card-button">Get Calorie</button>
        </Link>
      </div>
    </div>
  );
};

export default Food;