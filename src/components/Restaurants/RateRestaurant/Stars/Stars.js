import React from "react";
import classes from "./Stars.module.css";
import Star from "./Star/Star";
const stars = props => {
  // let starss;
  // for (let i = 1; i <= 5; i++) {
  //   starss += <Star starNumber={i} />;
  // }
  return (
    <ul className={classes.Stars}>
      <Star starNumber="1" clicked={props.starClicked} />
      <Star starNumber="2" clicked={props.starClicked} />
      <Star starNumber="3" clicked={props.starClicked} />
      <Star starNumber="4" clicked={props.starClicked} />
      <Star starNumber="5" clicked={props.starClicked} />
    </ul>
  );
};

export default stars;
