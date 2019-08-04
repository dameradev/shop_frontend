import React, { Component } from "react";
import axios from "../../../apis/shopBackend";

class SingleRestaurant extends Component {
  state = {
    restaurant: null
  };
  componentDidMount() {
    const resId = this.props.match.params;
    // console.log(resId);
    axios.get("/shop/restaurants/" + resId.id).then(response => {
      this.setState({ restaurant: response.data });
    });
  }
  render() {
    if (this.state.restaurant) {
      return (
        <div>
          <h1>{this.state.restaurant.name}</h1>
          <img
            src={this.state.restaurant.img}
            alt={this.state.restaurant.name}
          />
        </div>
      );
    }
    return <div>Loading..</div>;
  }
}
export default SingleRestaurant;
