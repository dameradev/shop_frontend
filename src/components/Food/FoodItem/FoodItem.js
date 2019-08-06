import React from "react";
import classes from "./FoodItem.module.css";
const foodItem = props => (
  <li className={classes.FoodItem}>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
  </li>
);
export default foodItem;
