import React from "react";

const Comment = (props) => {
  console.log(props.comment);
  return (
    <>
      {props.comment.id} : {props.comment.name}
      <br/>
    </>
  );
};

export default Comment;
