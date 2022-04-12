import React from "react";
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <>
      <div className="Box">
        <h1>Miu</h1>

        <h2>{post.content}</h2>
        <span>
          <a href="/">edit</a>
          <span className="Left_Padding"></span>
          <a href="/">delete</a>
        </span>
      </div>
    </>
  );
};

export default PostDetail;
