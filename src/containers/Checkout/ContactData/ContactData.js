import React, { Component } from "react";
import axios from "../../../apis/shopBackend";
import { connect } from "react-redux";
import Input from "../../../components/UI/Input/Input";

import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    orderData: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name"
        },
        value: ""
      },
      address: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your address"
        },
        value: ""
      }
    }
  };

  postOrderHandler = data => {};

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = { ...this.state.orderData };
    const updatedFormElement = { ...this.state.orderData[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderData: updatedForm });
  };
  orderHandler = e => {
    e.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderData) {
      formData[formElementIdentifier] = this.state.orderData[
        formElementIdentifier
      ].value;
    }

    let orderedItemsArr = [];

    this.props.orderedItems.map(orderedItem => {
      orderedItemsArr.push({
        name: orderedItem.name,
        quantity: orderedItem.quantity,
        price: orderedItem.price
      });
    });

    const orderData = { items: orderedItemsArr, formData: formData };

    axios.post("shop/create-order", orderData);
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderData) {
      formElementsArray.push({
        id: key,
        config: this.state.orderData[key]
      });
    }

    return (
      <form onSubmit={this.orderHandler} className={classes.ContactData}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <button onClick={this.orderHandler}>ORDER</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderedItems: state.cart.addedItems
  };
};

export default connect(mapStateToProps)(ContactData);
