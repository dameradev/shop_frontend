import React from "react";
import classes from "./Logo.module.css";
import shopLogo from "../../assets/images/shopLogo.png";
const logo = () => (
  <div className={classes.Logo}>
    <img src={shopLogo} alt="myShop" />
  </div>
);

export default logo;
