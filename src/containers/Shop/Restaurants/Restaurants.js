import React from "react";
import classes from "./Restaurants.module.css";
import Restaurant from "./Restaurant/Restaurant";

const restaurant = props => {
  return (
    <ul className={classes.Restaurants}>
      <Restaurant />
    </ul>
  );
};

export default restaurant;
