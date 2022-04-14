import React, { useContext, useEffect, useMemo, useState } from "react";
import PostService from "../service.js/post.service";
import Comments from "../containers/Comments";
import { AppContext } from "../containers/Dashboard";

const PostDetail = ({ changeFetchFlag }) => {
  const { selectedState, setSelectedState } = useContext(AppContext);

  const [post, setPost] = useState({});

  // const expensiveComputation = (num) => {
  //   // console.log("computation done " + num * 10);
  //   console.log("yaha " + num);
  //   // return num * 10;
  //   return true;
  // };

  // const memoizedValue = useMemo(
  //   () => expensiveComputation(selectedState),
  //   [selectedState]
  // );
  // const memoizedFunction = () => {
  //   // setSelectedState(num);
  //   return memoizedValue;
  // };

  useEffect(() => {
    PostService.getPostById(selectedState)
      .then((res) => {
        console.log(selectedState);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [selectedState]);

  const deletePost = () => {
    PostService.deletePost(selectedState)
      .then((res) => {
        if (res.status === 204) {
          console.log("Deleted successfully");
          changeFetchFlag();
          setSelectedState(0);
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };

  let postDetail = null;
  if (selectedState !== 0) {
    postDetail = (
      <>
        <div className="Box">
          <h2>id: {post.selectedState}</h2>
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
