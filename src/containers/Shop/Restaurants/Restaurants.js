import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./Restaurants.module.css";
import Restaurant from "../../../components/Restaurants/Restaurant/Restaurant";
import axios from "../../../apis/shopBackend";

import Aux from "../../../hoc/Aux/Aux";
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
        <Link key={restaurant._id} to={"/shop/" + restaurant._id}>
          <Restaurant
            name={restaurant.name}
            img={restaurant.img}
            workTime={restaurant.workTime}
          />
        </Link>
      );
    });
    return (
      <Aux>
        <Link to={"/create-restaurant"}>Create a new restaurant</Link>
        <ul className={classes.Restaurants}>{restaurants}</ul>
      </Aux>
    );
  }
}

export default Restaurants;
