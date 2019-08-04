import React, { Component } from "react";
import classes from "./Restaurants.module.css";
import Restaurant from "./Restaurant/Restaurant";

class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurants.map(restaurant => {
      return (
        <Restaurant
          key={restaurant._id}
          name={restaurant.name}
          img={restaurant.img}
          workTime={restaurant.workTime}
        />
      );
    });
    return <ul className={classes.Restaurants}>{restaurants}</ul>;
  }
}

export default Restaurants;
