import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostService from "../service.js/post.service";

const AddPost = () => {
  const navigate = useNavigate();
  const newPost = useRef();

  const [postState, setPostState] = useState({
    title: "",
    content: "",
    author: "",
    comments: [
      {
        name: "",
      },
    ],
  });

  const handleCommentNameChange = (idx) => (evt) => {
    const newComments = postState.comments.map((comment, cidx) => {
      if (idx !== cidx) return comment;
      return { ...comment, name: evt.target.value };
    });

    setPostState({ ...postState, comments: newComments });
  };

  const addButtonClicked = () => {
    const form = newPost.current;
    const post = {
      title: form["title"].value,
      content: form["content"].value,
      author: form["author"].value,
      comments: postState.comments,
    };

    PostService.createPost(post)
      .then((response) => {
        console.log("Post added successfully");
        setPostState({ title: "", content: "", author: "", comments: [] });
        navigate("/posts");
      })
      .catch();
  };

  const handleAddComment = () => {
    setPostState({
      ...postState,
      comments: postState.comments.concat([{ name: "" }]),
    });
  };

  const handleRemoveComment = (idx) => () => {
    setPostState({
      ...postState,
      comments: postState.comments.filter((s, cidx) => idx !== cidx),
    });
  };

  return (
    <div className="NewPost">
      <form ref={newPost}>
        <h1> Add Post</h1>
        <label>Title</label>
        <input
          type="text"
          name={"title"}
          // onChange={onChange}
          // value={postState.title}
        />
        <label>Content</label>
        <input
          type="text"
          name={"content"}
          // onChange={onChange}
          // value={postState.content}
        />
        <label>Author</label>
        <input
          type="text"
          name={"author"}
          // onChange={onChange}
          // value={postState.author}
        />
        <label>Comments</label>

        <div>
          {postState.comments.map((comment, idx) => (
            <div key={idx} className="shareholder">
              <input
                type="text"
                value={comment.name}
                onChange={handleCommentNameChange(idx)}
              />
              <button
                type="button"
                onClick={handleRemoveComment(idx)}
                className="small"
              >
                -
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddComment} className="small">
            Add Comment
          </button>
        </div>
      </form>
      <button onClick={addButtonClicked}> Add Post</button>
    </div>
  );
};

export default AddPost;
