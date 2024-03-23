import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import "../food/Food.css";
const Food = () => {
  const imageUrl = 'https://img.freepik.com/premium-vector/fitness-tracker-concept-background-isometric-illustration-fitness-tracker-vector-concept-background-web-design_96318-287.jpg?w=900'; // Image URL

  return (
    <div className="food-card-container"> {/* Container with styles */}
      <img src={imageUrl} alt="Healthy Food Ingredients" className="food-card-image" /> {/* Image with alt text */}
      <div className="food-card-content">
       
       
        <Link to="http://localhost:3002/">
          <button className="food-card-button">Track</button>
        </Link>
      </div>
    </div>
  );
};

export default Food;