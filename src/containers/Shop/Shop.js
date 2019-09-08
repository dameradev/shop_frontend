import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Shop.module.css";
import { connect } from "react-redux";

import Restaurants from "./Restaurants/Restaurants";
import Modal from "../../components/UI/Modal/Modal";
import News from "../../components/News/News";
import axios from "../../apis/shopBackend";

import * as actions from "../../store/actions/index";

class Shop extends Component {
  componentDidMount() {
    axios.get("/shop/foods").then(res => {
      this.setState({ foods: res.data });
    });
  }
  state = {
    showCart: true,
    foods: []
  };

  cartOpenedHandler = () => {
    this.props.onFetchCart(this.props.userId);
    this.setState({ showCart: true });
  };

  cartClosedHandler = () => {
    this.setState({ showCart: false });
  };

  render() {
    return (
      <div className={classes.Shop}>
        <Modal />
        <div className={classes.ShopHeader}>
          <h3>Restaurants page</h3>
          <Link to="/create-restaurant">Create a new restaurant</Link>
        </div>
        <div className={classes.ShopContent}>
          <News />
          <Restaurants />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCart: userId => dispatch(actions.fetchCart(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
