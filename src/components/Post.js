import React from "react";

const Post = (props) => {
  // console.log(props.obj);
  // const { id, title, author, content } = props.obj;
  
  // console.log(id);
  return (
    <div className="inlineclass">
      <div className="Content" onClick={props.setSelected}>
        <h1> {props.post.id}</h1>
        <h2> {props.post.title}</h2>
        <div className="Field">{props.post.author}</div>
      </div>
    </div>
  );
};

export default Post;
