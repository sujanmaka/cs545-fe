import React, { useRef, useState } from "react";
import PostService from "../service.js/post.service";

const AddPost = (props) => {
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

  // const onChange = (events) => {
  //   const updatedPost = {
  //     ...postState,
  //     [events.target.name]: events.target.value,
  //   };
  //   setPostState(updatedPost);
  // };

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
    };

    console.log(post.title);

    PostService.createPost(post)
      .then((response) => {
        setPostState({ title: "", content: "", author: "", comments: [] });
        props.changeFetchFlag();
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
        {/* <label>Comments</label> */}

        {/* <div>
          {postState.comments.map((comment, idx) => (
            <div key={idx} className="shareholder">
              <input
                type="text"
                // value={comment.name}
                // onChange={handleCommentNameChange(idx)}
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
        </div> */}
      </form>
      <button onClick={addButtonClicked}> Add Post</button>
    </div>
  );
};

export default AddPost;
