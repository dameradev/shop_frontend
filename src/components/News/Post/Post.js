import React, { Component } from "react";
import classes from "./Post.module.css";

class Post extends Component {
  render() {
    return (
      <div className={classes.Post}>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
        <button className={classes.ReadMore}>Read more..</button>
      </div>
    );
  }
}

export default Post;
