import React from "react";
import classes from "./Restaurant.module.css";

const restaurant = props => {
  return (
    <li className={classes.Restaurant} onClick={props.clicked}>
      <img src={props.img} alt="rest_logo" />
      <div>
        <h3>{props.name}</h3>
        <p>Status: Open</p>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
    </li>
  );
};

export default restaurant;
