import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Shop</NavigationItem>

    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">Log in</NavigationItem>
    ) : (
      <React.Fragment>
        <NavigationItem link="/orders">Your Orders</NavigationItem>
        <NavigationItem link="/logout">Log out</NavigationItem>
      </React.Fragment>
    )}
  </ul>
);
export default navigationItems;
