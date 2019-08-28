import React, { Component } from "react";
import { connect } from "react-redux";
import OrderItem from "./OrderItem/OrderItem";
import * as actions from "../../store/actions/index";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }
  render() {
    console.log(this.props.orderItems);
    return (
      <ul>
        <OrderItem />
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderItems: state.order.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
