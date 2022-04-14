import React, { useEffect, useState } from "react";
import PostService from "../service.js/post.service";
import Comments from "../containers/Comments";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  useEffect(() => {
    if (params.id) {
      PostService.getPostById(params.id)
        .then((res) => {
          setPost(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [params.id]);

  const deletePost = (id) => {
    PostService.deletePost(id)
      .then((res) => {
        if (res.status === 204) {
          console.log("Deleted successfully");
          navigate("/");
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };

  let postDetail = null;
  if (params.id) {
    postDetail = (
      <>
        <div className="Box">
          <h2>id: {post.id}</h2>
          <h3>title: {post.title}</h3>
          <h3>author: {post.author}</h3>
          <h3>content: {post.content}</h3>
          <div>
            <h3>Comments are: </h3>
            {post.comments != null ? (
              <Comments comments={post.comments} />
            ) : null}
          </div>
          <br />
          <br />
          {/* <span>
            <a href="/">edit</a>
            <span className="Left_Padding"></span>
            <a href="/">delete</a>
          </span> */}
          <button
            onClick={() => deletePost(params.id)}
            size="sm"
            variant="danger"
          >
            Delete
          </button>
        </div>
      </>
    );
  }

  return postDetail;
};

export default PostDetail;
