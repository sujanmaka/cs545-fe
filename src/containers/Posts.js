import React, { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import PostService from "../service.js/post.service";
import { AppContext } from "./Dashboard";

const Posts = (props) => {
  const { selectedState, setSelectedState } = useContext(AppContext);

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
          if (selectedState === post.id) {
            setSelectedState(0);
          } else {
            setSelectedState(post.id);
          }
        }}
      />
    );
  });

  return posts;
};

export default Posts;
