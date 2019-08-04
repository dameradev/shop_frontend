import React, { Component } from "react";
import classes from "./Restaurants.module.css";
import Restaurant from "./Restaurant/Restaurant";
import axios from "../../apis/shopBackend";
import CreateRestaurant from "./CreateRestaurant/CreateRestaurant";
import Aux from "../../hoc/Aux/Aux";
class Restaurants extends Component {
  state = {
    restaurants: null
  };

  componentDidMount() {
    axios
      .get("shop/restaurants")
      .then(response => this.setState({ restaurants: response.data }));
  }

  render() {
    if (!this.state.restaurants) return <div>Loading...</div>;
    const restaurants = this.state.restaurants.map(restaurant => {
      return (
        <Restaurant
          key={restaurant._id}
          name={restaurant.name}
          img={restaurant.img}
          workTime={restaurant.workTime}
        />
      );
    });
    return (
      <Aux>
        <CreateRestaurant />
        <ul className={classes.Restaurants}>{restaurants}</ul>
      </Aux>
    );
  }
}

export default Restaurants;
