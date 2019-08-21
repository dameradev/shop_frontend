import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./Restaurants.module.css";
import Restaurant from "../../../components/Restaurants/Restaurant/Restaurant";
import axios from "../../../apis/shopBackend";
import withErrorHandler from "../../../hoc/withErrorHandler/WithErrorHandler";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Aux from "../../../hoc/Aux/Aux";

import * as actions from "../../../store/actions/index";

class Restaurants extends Component {
  state = {
    restaurants: null,
    error: false,
    loading: false
  };

  componentDidMount() {
    this.props.onFetchRestaurants();
  }

  getRestaurant = id => {
    this.props.history.push("/shop/" + id);
  };

  render() {
    let restaurants = null;
    if (this.state.loading) {
      restaurants = <Spinner />;
    }

    if (this.props.restaurants) {
      restaurants = this.props.restaurants.map(restaurant => {
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

const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRestaurants: () => dispatch(actions.fetchRestaurants())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(withRouter(Restaurants), axios));
