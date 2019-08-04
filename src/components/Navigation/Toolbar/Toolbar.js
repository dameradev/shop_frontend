import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = () => (
  <div className={classes.Toolbar}>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </div>
);

export default toolbar;
