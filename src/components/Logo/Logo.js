import React from "react";
import { Link } from "react-router-dom";
import classes from "./Logo.module.css";
import shopLogo from "../../assets/images/shopLogo.png";
const logo = () => (
  <Link to="/" className={classes.Logo}>
    <img src={shopLogo} alt="myShop" />
  </Link>
);

export default logo;
