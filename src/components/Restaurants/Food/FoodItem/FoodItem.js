import React from "react";
import classes from "./FoodItem.module.css";
const foodItem = props => {
  let id = props.id;
  return (
    <li className={classes.FoodItem}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>
        Price: <strong>{props.price}</strong>
      </p>
      <p>{props.id}</p>
      <button onClick={() => props.foodClicked(id)}>Add to cart</button>
    </li>
  );
};
export default foodItem;
