import React from "react";
import classes from "./Restaurant.module.css";

const restaurant = props => {
  return (
    <li className={classes.Restaurant}>
      <img src={props.img} />
      <h1>{props.name}</h1>
      <p>{props.workTime}</p>
    </li>
  );
};

export default restaurant;
