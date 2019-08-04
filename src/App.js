import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Shop from "./containers/Shop/Shop";

class App extends Component {
  render() {
    return (
      <Layout>
        <Shop />
      </Layout>
    );
  }
}

export default App;
