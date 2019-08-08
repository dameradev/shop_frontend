import React from "react";
import classes from "./Restaurant.module.css";

const restaurant = props => {
  return (
    <li className={classes.Restaurant} onClick={props.clicked}>
      <img src={props.img} alt="rest_logo" />
      <h3>{props.name}</h3>
      <p>{props.workTime}</p>
    </li>
  );
};

export default restaurant;
