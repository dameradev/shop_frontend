import React, { Component } from "react";
import classes from "./CreateRestaurant.module.css";
import axios from "../../../apis/shopBackend";

class CreateRestaurant extends Component {
  state = {
    name: "",
    img: ""
  };

  postRestaurant = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      img: this.state.img
    };
    axios
      .post("shop/create-restaurant", data)
      .then(response => console.log(response));
  };

  render() {
    return (
      <form className={classes.CreateRestaurant}>
        <label htmlFor="name">Restaurant name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <label htmlFor="img">Image:</label>
        <input
          type="text"
          name="img"
          value={this.state.img}
          onChange={event => this.setState({ img: event.target.value })}
        />
        <button onClick={this.postRestaurant} type="submit">
          Add Restaurant!
        </button>
      </form>
    );
  }
}

export default CreateRestaurant;
