import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import PostDetail from "../components/PostDetail";
import PostService from "../service.js/post.service";
import { Link } from "react-router-dom";

const Posts = (props) => {
  const [postsState, setPostsState] = useState([]);

  useEffect(() => {
    PostService.getPosts().then(
      (response) => {
        setPostsState(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [props.fetchFlag]);

  const posts = postsState.map((post) => {
    return (
      <Link to={`${post.id}`} key={post.id}>
        <Post post={post} />
      </Link>

      // <Post
      //   key={post.id}
      //   post={post}
      //   setSelected={() => {
      //     if (selectedState === post.id) {
      //       setSelectedState(0);
      //     } else {
      //       setSelectedState(post.id);
      //     }
      //   }}
      // />
    );
  });

  // return posts;
  return (
    <div className="Product">
      {posts}
      <PostDetail />
    </div>
  );
};

export default Posts;
