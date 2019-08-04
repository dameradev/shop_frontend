import React, { Component } from "react";
import Aux from "../Aux/Aux";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <div>Header, sideMenu, toolbar</div>
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
