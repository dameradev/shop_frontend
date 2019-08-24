import React, { Component } from "react";

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
          placeholder: "Your name"
        },
        value: ""
      }
    }
  };
}

export default ContactData;
