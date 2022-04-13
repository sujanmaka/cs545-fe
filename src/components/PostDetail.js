import React, { useEffect, useState } from "react";
import PostService from "../service.js/post.service";

const PostDetail = ({ id, setSelected, changeFetchFlag }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    PostService.getPostById(id)
      .then((res) => {
        console.log(id);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const deletePost = () => {
    PostService.deletePost(post.id)
      .then((res) => {
        if (res.status === 204) {
          console.log("Deleted successfully");
          changeFetchFlag();
          setSelected(0);
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };

  let postDetail = null;
  if (id !== 0) {
    postDetail = (
      <>
        <div className="Box">
          <h2>id: {post.id}</h2>
          <h3>title: {post.title}</h3>
          <h3>author: {post.author}</h3>
          <h3>content: {post.content}</h3>
          <div>
            <h3>Comments are: </h3>
            {/* <Comments comments={post.comments} /> */}
          </div>
          <br />
          <br />
          {/* <span>
            <a href="/">edit</a>
            <span className="Left_Padding"></span>
            <a href="/">delete</a>
          </span> */}
          <button onClick={deletePost} size="sm" variant="danger">
            Delete
          </button>
        </div>
      </>
    );
  }

  return postDetail;
};

export default PostDetail;
