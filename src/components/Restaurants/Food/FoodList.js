import React, { Component } from "react";
import classes from "./FoodList.module.css";
import FoodItem from "./FoodItem/FoodItem";
import Spinner from "../../UI/Spinner/Spinner";

class FoodList extends Component {
  render() {
    let foodList = <Spinner />;
    if (!this.props.loading) {
      foodList = this.props.foods.map(food => {
        return (
          <FoodItem
            key={food._id}
            name={food.name}
            description={food.description}
            price={food.price}
            id={food._id}
            foodClicked={this.props.clicked}
            // onClick={this.props.foodClicked(food.id)}
          />
        );
      });
    }
    return <ul className={classes.FoodList}>{foodList}</ul>;
  }
}

export default FoodList;
