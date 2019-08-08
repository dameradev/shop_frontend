import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./Restaurants.module.css";
import Restaurant from "../../../components/Restaurants/Restaurant/Restaurant";
import axios from "../../../apis/shopBackend";
import withErrorHandler from "../../../hoc/withErrorHandler/WithErrorHandler";

import Aux from "../../../hoc/Aux/Aux";
class Restaurants extends Component {
  state = {
    restaurants: null,
    error: false
  };

  componentDidMount() {
    axios
      .get("shop/restaurants")
      .then(response => {
        console.log(response.data);
        this.setState({ restaurants: response.data });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  getRestaurant = id => {
    console.log("here");
    this.props.props.history.push("/shop/" + id);
  };

  render() {
    if (!this.state.restaurants) return <div>Loading...</div>;
    const restaurants = this.state.restaurants.map(restaurant => {
      return (
        <Restaurant
          key={restaurant._id}
          name={restaurant.name}
          img={restaurant.img}
          workTime={restaurant.workTime}
          clicked={() => this.getRestaurant(restaurant._id)}
        />
      );
    });
    return (
      <Aux>
        <ul className={classes.Restaurants}>{restaurants}</ul>
      </Aux>
    );
  }
}

export default withErrorHandler(Restaurants, axios);
