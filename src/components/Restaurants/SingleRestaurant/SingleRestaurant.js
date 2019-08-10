import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

import axios from "../../../apis/shopBackend";
import FoodList from "../Food/FoodList";
import classes from "./SingleRestaurant.module.css";
import CreateFood from "../Food/CreateFood/CreateFood";
import RateRestaurant from "../RateRestaurant/RateRestaurant";
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
    console.log(this.props);
    const resId = this.props.match.params;

    axios.get("shop/restaurants/" + resId.id).then(response => {
      this.setState({ restaurant: response.data });
    });
    axios.get("shop/foods/" + resId.id).then(response => {
      this.setState({ foods: response.data.foods });
    });
    axios.get("shop/status").then(response => {
      if (response.data) {
        console.log(response.data.items);
        this.setState({ cart: { items: response.data.items } });
      }
    });
  }

  addToCart = async id => {
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

    await this.setState({ cart: { items } });
    const cartItems = [...this.state.cart.items];
    axios
      .post("/shop/add-to-cart", cartItems)
      .then(response => console.log(response));
  };

  postRestaurantRating = stars => {
    let data = {
      stars: stars,
      restaurantId: this.props.match.params.id
    };
    axios.post("shop/rate-restaurant", data);
  };

  closeFormHandler = e => {
    e.preventDefault();
    console.log(e);
    this.props.history.push("/shop/" + this.props.match.params.id);
  };

  render() {
    if (this.state.restaurant && this.state.foods) {
      return (
        <div className={classes.SingleRestaurant}>
          <div className={classes.RestaurantDescription}>
            <h1>{this.state.restaurant.name}</h1>
            <img
              src={this.state.restaurant.img}
              alt={this.state.restaurant.name}
            />
          </div>
          <div className={classes.RestaurantItems}>
            <div className={classes.Links}>
              <Link to={this.props.match.url + "/create-food"}>
                Create food
              </Link>
              <Link to={this.props.match.url + "/rate-restaurant"}>
                Rate restaurant
              </Link>
            </div>
            <Switch>
              <Route
                path={this.props.match.url + "/create-food"}
                render={() => (
                  <CreateFood
                    restaurantId={this.state.restaurant._id}
                    closeForm={this.closeFormHandler}
                  />
                )}
              />
              <Route
                path={this.props.match.url + "/rate-restaurant"}
                exact
                render={() => (
                  <RateRestaurant
                    rateRestaurant={this.postRestaurantRating}
                    closeRateRestaurant={this.closeFormHandler}
                  />
                )}
              />
            </Switch>

            <FoodList foods={this.state.foods} clicked={this.addToCart} />
          </div>
        </div>
      );
    }
    return <div>Loading..</div>;
  }
}
export default SingleRestaurant;
