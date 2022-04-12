import React from "react";

const UpdateTitle = (props) => {
  return (
    <div>
      <h1>Update title of 1st Post</h1>
      <input
        type="text"
        name={"title"}
        onChange={props.onChange}
        value={props.title}
      />
      <button onClick={props.changeButtonClicked}>Change Title </button>
    </div>
  );
};

export default UpdateTitle;
