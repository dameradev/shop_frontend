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
          foodId: {},
          quantity: 0,
          restaurantId: 0
        }
      ]
    }
  };

  componentDidMount() {
    const resId = this.props.match.params;

    axios.get("/shop/restaurants/" + resId.id).then(response => {
      this.setState({ restaurant: response.data });
    });
    axios.get("/shop/foods/" + resId.id).then(response => {
      this.setState({ foods: response.data.foods });
    });
    axios.get("/shop/get-cart").then(response => {
      if (response.data) {
        console.log(response.data.items);
        this.setState({ cart: { items: response.data.items } });
      }
    });
  }

  // componentDidUpdate(prevState) {
  //   const cartItems = [...this.state.cart.items];
  //   if (prevState.cart.items !== this.state.cart.items) {
  //   }
  // }

  addToCart = id => {
    const items = [...this.state.cart.items];
    const foodIndex = items.findIndex(cp => {
      return cp["foodId"].toString() === id.toString();
    });

    let newQuantity = 1;

    if (foodIndex >= 0) {
      newQuantity = this.state.cart.items[foodIndex].quantity + 1;
      items[foodIndex].quantity = newQuantity;
    } else {
      items.push({
        foodId: id,
        quantity: newQuantity,
        restaurantId: this.props.match.params.id
      });
    }
    if (items[0].quantity === 0) {
      items.shift();
    }
    this.setState({ cart: { items } });
    const cartItems = [...this.state.cart.items];
    console.log("shet");
    axios
      .post("/shop/add-to-cart", cartItems)
      .then(response => console.log(response));

    // if ()
    // const foodIds = [];
    // items.forEach(item => {
    //   foodIds.push(item["food"]);
    // });
    // foodIds;
  };

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
