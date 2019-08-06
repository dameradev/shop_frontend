import React, { Component } from "react";
import axios from "../../../apis/shopBackend";

import classes from "./CreateFood.module.css";

class CreateFood extends Component {
  state = {
    name: "",
    description: "",
    restaurantId: ""
  };
  componentDidMount() {
    console.log(this.props);
  }
  postFood = () => {
    const data = {
      name: this.state.name,
      description: this.state.description,
      restaurantId: this.props.restaurantId
    };
    axios
      .post("shop/create-food", data)
      .then(response => console.log(response));
  };

  render() {
    return (
      <form onSubmit={this.postFood} className={classes.CreateFood}>
        <h3>Add a new food item</h3>
        <label htmlFor="name">Food name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={event => this.setState({ description: event.target.value })}
        />
        <button type="submit">Add Food!</button>
      </form>
    );
  }
}

export default CreateFood;
