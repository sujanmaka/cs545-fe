import React, { useState } from "react";
import PostService from "../service.js/post.service";

const AddPost = (props) => {
  const [postState, setPostState] = useState({
    title: "",
    content: "",
    author: "",
    comments: [],
  });

  const onChange = (events) => {
    const updatedPost = {
      ...postState,
      [events.target.name]: events.target.value,
    };
    setPostState(updatedPost);
  };

  const addButtonClicked = () => {
    PostService.createPost(postState)
      .then((response) => {
        setPostState({ title: "", content: "", author: "", comments: [] });
        props.changeFetchFlag();
      })
      .catch();
  };

  return (
    <div className="NewPost">
      <h1> Add Post</h1>

      <label>Title</label>
      <input
        type="text"
        name={"title"}
        onChange={onChange}
        value={postState.title}
      />
      <label>Content</label>
      <input
        type="text"
        name={"content"}
        onChange={onChange}
        value={postState.content}
      />
      <label>Title</label>
      <input
        type="text"
        name={"author"}
        onChange={onChange}
        value={postState.author}
      />

      <button onClick={addButtonClicked}> Add Post</button>
    </div>
  );
};

export default AddPost;
