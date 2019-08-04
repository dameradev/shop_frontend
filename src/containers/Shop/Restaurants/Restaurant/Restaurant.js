import React from "react";
import classes from "./Restaurant.module.css";

const restaurant = props => {
  return (
    <li className={classes.Restaurant}>
      <img src="" />
      <h1>{props.title}</h1>
      <p>{props.worktime}</p>
    </li>
  );
};

export default restaurant;
