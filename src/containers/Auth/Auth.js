import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Auth.module.css";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

import * as actions from "../../store/actions/index";

class Auth extends Component {
  state = {
    controls: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Your Password"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    isSignup: true
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };

    this.setState({ controls: updatedControls });
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return { isSignup: !prevState.isSignup };
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.controls.name.value,
      this.state.isSignup
    );
  };

  render() {
    const formItemsArr = [];
    for (let key in this.state.controls) {
      formItemsArr.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    let form = formItemsArr.map(formElement => {
      return (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={event => this.inputChangedHandler(event, formElement.id)}
          touched={formElement.config.touched}
          shouldValidate={formElement.config.validation}
          invalid={!formElement.config.valid}
        />
      );
    });

    return (
      <div className={classes.Auth}>
        <form onSubmit={this.onSubmitHandler}>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
        <Button btnType="Danger" clicked={this.switchAuthModeHandler}>
          Change to {this.state.isSignup ? "Log in" : "Sign up"}
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, name, isSignup) =>
      dispatch(actions.auth(email, password, name, isSignup))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Auth);
