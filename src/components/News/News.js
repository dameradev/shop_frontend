import React from "react";
import Post from "./Post/Post";
import classes from "./News.module.css";

const posts = [
  {
    id: 1,
    title: "Changing the game together",
    content: "There has always been this idea that there is no room..."
  },
  {
    id: 2,
    title: "Riding safely in Skopje",
    content: "We know you’re always on the move. That’s why we’re always..."
  }
  // {
  //   id: 3,
  //   title: "Banana Coconut Muffins",
  //   content: "These muffins taste familiar and comforting, given..."
  // }
];

const postsArr = posts.map(post => {
  return <Post key={post.id} title={post.title} content={post.content} />;
});

const news = () => (
  <div className={classes.News}>
    <h1>News</h1>
    {postsArr}
  </div>
);

export default news;
