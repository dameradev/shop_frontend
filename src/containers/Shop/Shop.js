import React, { Component } from "react";
import classes from "./Shop.module.css";
import Restaurants from "./Restaurants/Restaurants";
class Shop extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/shop/restaurants")
      .then(response => response.json())
      .then(data => this.setState({ restaurants: data }));
  }

  state = {
    restaurants: []
  };
  render() {
    return (
      <div className={classes.Shop}>
        <h3>Restaurants page</h3>

        <hr />
        <Restaurants restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default Shop;
