import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import axios from "../../../apis/shopBackend";
import FoodList from "../Food/FoodList";
import classes from "./SingleRestaurant.module.css";
import CreateFood from "../Food/CreateFood/CreateFood";
import RateRestaurant from "../RateRestaurant/RateRestaurant";

import * as actions from "../../../store/actions/index";

class SingleRestaurant extends Component {
  state = {
    restaurant: null,
    foods: null,
    cart: {
      items: []
    }
  };

  componentDidMount() {
    const resId = this.props.match.params;
    this.props.onFetchRestaurant(resId);
    this.props.onFetchFoods(resId);
    this.props.onFetchCart();
    // axios.get("shop/status").then(response => {
    //   if (response.data) {
    //     this.setState({ cart: { items: response.data.items } });
    //   }
    // });
  }

  addToCart = async id => {
    // const {} = this.state;
    // const {} = this.props;
    const items = [...this.props.cart.items];
    console.log(items);
    const foodIndex = items.findIndex(cp => {
      return cp["foodId"].toString() === id.toString();
    });

    let newQuantity = 1;

    if (foodIndex >= 0) {
      newQuantity = this.props.cart.items[foodIndex].quantity + 1;
      items[foodIndex].quantity = newQuantity;
    } else {
      items.push({
        foodId: id,
        quantity: newQuantity,
        restaurantId: this.props.match.params.id
      });
    }

    // console.log(items[0]);
    // if (items[0].quantity === 0) {
    //   items.shift();
    // }

    // await this.setState({ cart: { items } });
    console.log(items);
    await this.props.onPostCart(items);
    await this.props.onFetchCart();
    const cartItems = [...this.props.cart.items];

    await axios.post("/shop/add-to-cart", cartItems);
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

    this.props.history.push("/shop/" + this.props.match.params.id);
  };

  render() {
    if (this.props.restaurant && this.props.foods && !this.props.loading) {
      return (
        <div className={classes.SingleRestaurant}>
          <div className={classes.RestaurantDescription}>
            <h1>{this.props.restaurant.name}</h1>
            <img
              src={this.props.restaurant.img}
              alt={this.props.restaurant.name}
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
                    restaurantId={this.props.restaurant._id}
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

            <FoodList
              foods={this.props.foods}
              clicked={this.props.onAddToCart}
              loading={this.props.loading}
            />
          </div>
        </div>
      );
    }
    return <div>Loading..</div>;
  }
}

const mapStateToProps = state => {
  return {
    restaurant: state.restaurant.restaurant,
    foods: state.food.foods,
    loading: state.food.loading,
    cart: { items: state.cart.items }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchFoods: id => dispatch(actions.fetchFoods(id)),
    onFetchRestaurant: id => dispatch(actions.fetchRestaurant(id)),
    onFetchCart: () => dispatch(actions.fetchCart()),
    onPostCart: cartItems => dispatch(actions.postAddToCart(cartItems)),
    onAddToCart: id => dispatch(actions.addToCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleRestaurant);
