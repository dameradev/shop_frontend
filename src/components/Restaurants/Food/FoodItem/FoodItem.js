import React from "react";
import classes from "./FoodItem.module.css";
const foodItem = props => {
  let id = props.id;
  return (
    <li className={classes.FoodItem}>
      <div className={classes.ItemDescription}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>
          Price: <strong>{props.price}</strong>
        </p>
        <button
          className={classes.AddToCart}
          onClick={() =>
            props.foodClicked(id, props.userId, props.restaurantId)
          }
        >
          Add to cart
        </button>
      </div>
      <div className={classes.ItemImage}>
        <img src="http://www.pngmart.com/files/1/Pepperoni-Pizza.png" />
      </div>
    </li>
  );
};
export default foodItem;
