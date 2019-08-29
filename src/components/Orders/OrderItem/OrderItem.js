import React from "react";
import classes from "./OrderItem.module.css";
const orderItem = props => (
  <li className={classes.OrderItem}>
    <h3>{props.item.name}</h3>
    <span>Price: {props.item.price}</span>
    <span>Quantity: {props.item.quantity}</span>
  </li>
);

export default orderItem;
