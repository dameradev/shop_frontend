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
    restaurantId: ""
  };

  componentDidMount() {
    console.log(this.props);
  }

  postFood = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      description: this.state.description,
      restaurantId: this.props.restaurantId
    };
    axios
      .post("shop/create-food", data)
      .then(response => console.log(response));
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
      <form onSubmit={this.postFood} className={classes.CreateFood}>
        <button className={classes.X} onClick={this.props.closeForm}>
          X
        </button>

        <h3>Add a new food item</h3>
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
