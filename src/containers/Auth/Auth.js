import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./Auth.module.css";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

import * as actions from "../../store/actions/index";

class Auth extends Component {
  state = {
    controls: {
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
    const updatedControls = { ...this.state.controls };

    updatedControls.email.value = "";
    updatedControls.name.value = "";
    updatedControls.password.value = "";

    this.setState(prevState => {
      return { isSignup: !prevState.isSignup, controls: updatedControls };
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
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/" />;
    }
    let form = formItemsArr.map((formElement, index) => {
      if (!this.state.isSignup && formItemsArr.length > 2) {
        formItemsArr.splice(0, 1);
      }

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
        {authRedirect}
        <form onSubmit={this.onSubmitHandler}>
          <h2>{!this.state.isSignup ? "Log in" : "Sign up"} form</h2>
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, name, isSignup) =>
      dispatch(actions.auth(email, password, name, isSignup))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
