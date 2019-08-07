import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";
class Modal extends Component {
  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          backDropClicked={this.props.modalClosed}
        />
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100%)",
            opacity: this.props.show ? "1" : "0"
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
