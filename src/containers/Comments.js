import React from "react";
import Comment from "../components/Comment";

const Comments = (props) => {
  const comments = props.comments.map((comment) => {
    return <Comment key={comment.id} comment={comment} />;
  });
  return comments;
};

export default Comments;