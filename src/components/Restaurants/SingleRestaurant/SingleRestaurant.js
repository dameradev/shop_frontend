import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../../apis/shopBackend";
import FoodList from "../../Food/FoodList";
import classes from "./SingleRestaurant.module.css";
import CreateFood from "../../Food/CreateFood/CreateFood";

class SingleRestaurant extends Component {
  state = {
    restaurant: null,
    foods: null
  };
  componentDidMount() {
    const resId = this.props.match.params;
    // console.log(resId);

    axios.get("/shop/restaurants/" + resId.id).then(response => {
      this.setState({ restaurant: response.data });
    });
    axios.get("/shop/foods/" + resId.id).then(response => {
      this.setState({ foods: response.data.foods });
    });
  }
  render() {
    console.log(this.state);
    if (this.state.restaurant && this.state.foods) {
      return (
        <div>
          <div className={classes.RestaurantDescription}>
            <h1>{this.state.restaurant.name}</h1>
            <img
              src={this.state.restaurant.img}
              alt={this.state.restaurant.name}
            />
          </div>
          <CreateFood restaurantId={this.state.restaurant._id} />
          <FoodList foods={this.state.foods} />
        </div>
      );
    }
    return <div>Loading..</div>;
  }
}
export default SingleRestaurant;
