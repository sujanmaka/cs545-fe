import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import PostService from "../service.js/post.service";

const Posts = (props) => {
  const [postsState, setPostsState] = useState([]);

  useEffect(() => {
    PostService.getPosts().then(
      (response) => {
        console.log(response.data);
        setPostsState(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [props.fetchFlag]);

  const posts = postsState.map((post) => {
    return (
      <Post
        key={post.id}
        post={post}
        setSelected={() => {
          props.setSelected(post.id);
        }}
      />
    );
  });

  return posts;
};

export default Posts;
