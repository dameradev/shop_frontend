import React, { Component } from "react";
import axios from "../../../../apis/shopBackend";
import Input from "../../../UI/Input/Input";

import classes from "./CreateFood.module.css";

class CreateFood extends Component {
  state = {
    foodForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Food Name"
        },
        value: ""
      },
      description: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Food Description(ingredients)"
        },
        value: ""
      },
      price: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Food Price"
        },
        value: ""
      }
    },
    restaurantId: "",
    loading: false
  };

  componentDidMount() {
    console.log(this.props);
  }

  foodCreateHandler = e => {
    e.preventDefault();

    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.foodForm) {
      formData[formElementIdentifier] = this.state.foodForm[
        formElementIdentifier
      ].value;
    }
    console.log(formData);
    const data = {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      restaurantId: this.props.restaurantId
    };
    axios
      .post("shop/create-food", data)
      .then(response => this.setState({ loading: false }));
  };

  inputChangedHandler = (event, inputIdentifier) => {
    event.preventDefault();
    const updatedFoodForm = {
      ...this.state.foodForm
    };
    const updatedFormElement = { ...updatedFoodForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFoodForm[inputIdentifier] = updatedFormElement;
    this.setState({ foodForm: updatedFoodForm });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.foodForm) {
      formElementsArray.push({
        id: key,
        config: this.state.foodForm[key]
      });
    }

    return (
      <form onSubmit={this.foodCreateHandler} className={classes.CreateFood}>
        <div className={classes.Header}>
          <h3>Add a new food item</h3>
          <button
            className={classes.X}
            type="button"
            onClick={this.props.closeForm}
          >
            X
          </button>
        </div>

        {formElementsArray.map(formElement => {
          return (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={event => this.inputChangedHandler(event, formElement.id)}
            />
          );
        })}

        <button className={classes.Submit} type="submit">
          Add Food!
        </button>
      </form>
    );
  }
}

export default CreateFood;
