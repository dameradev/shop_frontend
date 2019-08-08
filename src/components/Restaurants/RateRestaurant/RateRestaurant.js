import React, { Component } from "react";
import classes from "./RateRestaurant.module.css";
import Stars from "./Stars/Stars";
class RateRestaurant extends Component {
  state = {
    stars: 0
  };

  starAddRating = starNumber => {
    let num = 0;
    switch (starNumber) {
      case "5":
        num = 1;
        break;
      case "4":
        num = 2;
        break;
      case "2":
        num = 4;
        break;
      case "1":
        num = 5;
        break;
      default:
        num = 3;
    }
    this.setState({ stars: num });
  };

  render() {
    return (
      <div className={classes.RateRestaurant}>
        <button className={classes.X} onClick={this.props.closeRateRestaurant}>
          X
        </button>

        <Stars className={classes.Stars} starClicked={this.starAddRating} />
        <label htmlFor="review">Write a review</label>
        <textarea name="review" cols="30" rows="10" />
        <button
          className={classes.Submit}
          onClick={() => this.props.rateRestaurant(this.state.stars)}
        >
          Rate Restaurant
        </button>
      </div>
    );
  }
}
export default RateRestaurant;
