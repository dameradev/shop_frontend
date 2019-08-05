import React, { Component } from "react";
import classes from "./FoodList.module.css";
import FoodItem from "./FoodItem/FoodItem";

class FoodList extends Component {
  render() {
    return (
      <ul className={classes.FoodList}>
        <FoodItem />
      </ul>
    );
  }
}

export default FoodList;
