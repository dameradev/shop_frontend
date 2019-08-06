import React, { Component } from "react";

import axios from "../../../apis/shopBackend";
import FoodList from "../../Food/FoodList";
import classes from "./SingleRestaurant.module.css";
import CreateFood from "../../Food/CreateFood/CreateFood";

class SingleRestaurant extends Component {
  state = {
    restaurant: null,
    foods: null,
    cart: {
      items: [
        {
          food: {},
          quantity: 0,
          restaurantId: 0
        }
      ]
    }
  };

  addToCart = id => {
    const items = [...this.state.cart.items];
    const foodIndex = items.findIndex(cp => {
      return cp["food"].toString() === id.toString();
    });

    let newQuantity = 1;

    if (foodIndex >= 0) {
      newQuantity = this.state.cart.items[foodIndex].quantity + 1;
      items[foodIndex].quantity = newQuantity;
    } else {
      items.push({
        food: id,
        quantity: newQuantity,
        restaurantId: this.props.match.params.id
      });
    }
    if (items[0].quantity === 0) {
      items.shift();
    }
    this.setState({ cart: { items } });

    // if ()
    // const foodIds = [];
    // items.forEach(item => {
    //   foodIds.push(item["food"]);
    // });
    // foodIds;
  };

  componentDidMount() {
    const resId = this.props.match.params;

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
          <FoodList foods={this.state.foods} clicked={this.addToCart} />
          <button onClick={this.addToCart}>DANE</button>
        </div>
      );
    }
    return <div>Loading..</div>;
  }
}
export default SingleRestaurant;
