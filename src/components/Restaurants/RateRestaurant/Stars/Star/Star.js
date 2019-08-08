import React from "react";
// import classes from "./Star.module.css";
import Aux from "../../../../../hoc/Aux/Aux";
// import StarUnchecked from "../../../../../assets/images/star-unchecked.png";

const star = props => (
  <Aux>
    <input type="radio" name="rating" id={"rating-" + props.starNumber} />
    <label
      htmlFor={"rating-" + props.starNumber}
      onClick={() => props.clicked(props.starNumber)}
    />
  </Aux>
);

export default star;
