import React from "react";
import classes from "./CartButton.module.css";
import cartImage from "../../../assets/images/cart.png";
const CartButton = props => (
  <button className={classes.CartButton} onClick={props.clicked}>
    <img src={cartImage} alt="shopping-cart" />
  </button>
);

export default CartButton;
