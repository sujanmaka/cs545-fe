import React from "react";
import Post from "../components/Post";

const Posts = (props) => {
  const posts = props.posts.map((post) => {
    return <Post key={post.id} post={post} onPostClick={props.onPostClick} />;
  });

  return posts;
};

export default Posts;
