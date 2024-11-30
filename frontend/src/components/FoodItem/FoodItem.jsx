import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems = {}, addToCart, removeFromCart } = useContext(StoreContext); // Set a default for cartItems
  const itemCount = cartItems[id] || 0;

  if (!id || !name || !price || !description || !image) {
    return null; // Return null or a loader if data is missing
  }

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {itemCount === 0 ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to Cart"
          />
        ) : (
          <div className="food-item-counter">
            <button className="counter-btn" onClick={() => removeFromCart(id)}>
              -
            </button>
            <span>{itemCount}</span>
            <button className="counter-btn" onClick={() => addToCart(id)}>
              +
            </button>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating Stars" />
        </div>
      </div>
      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">Rs {price}</p>
    </div>
  );
};

export default FoodItem;
