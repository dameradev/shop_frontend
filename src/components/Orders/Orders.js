import React, { Component } from "react";
import { connect } from "react-redux";
import OrderItem from "./OrderItem/OrderItem";
import * as actions from "../../store/actions/index";
import classes from "./Orders.module.css";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }
  render() {
    let orderItems;
    if (this.props.orderData) {
      this.props.orderData.forEach(order => {
        orderItems = order.items.map(item => {
          return <OrderItem item={item} key={item.name} />;
        });
      });
    }
    console.log(this.props.orderData);

    return <ul className={classes.Orders}>{orderItems}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    orderData: state.order.orders
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
