import React from "react";
import classes from "./OrderItem.module.css";
const orderItem = () => (
  <li className={classes.OrderItem}>
    <p>name</p>
    <p>price</p>
    <p>quantity</p>
  </li>
);

export default orderItem;
