import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import classes from "./Restaurants.module.css";
import Restaurant from "../../../components/Restaurants/Restaurant/Restaurant";
import axios from "../../../apis/shopBackend";
import withErrorHandler from "../../../hoc/withErrorHandler/WithErrorHandler";
import Spinner from "../../../components/UI/Spinner/Spinner";

import Aux from "../../../hoc/Aux/Aux";
class Restaurants extends Component {
  state = {
    restaurants: null,
    error: false,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("shop/restaurants")
      .then(response => {
        this.setState({ restaurants: response.data, loading: false });
      })
      .catch(error => {
        this.setState({ error: true, loading: false });
      });
  }

  getRestaurant = id => {
    this.props.history.push("/shop/" + id);
  };

  render() {
    let restaurants = null;
    if (this.state.loading) {
      restaurants = <Spinner />;
    }

    if (this.state.restaurants) {
      restaurants = this.state.restaurants.map(restaurant => {
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
    }

    return (
      <Aux>
        <ul className={classes.Restaurants}>{restaurants}</ul>
      </Aux>
    );
  }
}

export default withErrorHandler(withRouter(Restaurants), axios);
