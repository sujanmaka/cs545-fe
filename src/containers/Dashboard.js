import React, { useState } from "react";
import PostDetail from "../components/PostDetail";
import UpdateTitle from "../service.js/UpdateTitle";
import Posts from "./Posts";

const Dashboard = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "WAA",
      author: "sujan maka",
      content: "Spring Boot, React",
    },
    {
      id: 2,
      title: "Algorithm",
      author: "kiran",
      content: "JPA, Spring Boot, React",
    },
    {
      id: 3,
      title: "EA",
      author: "Najib",
      content: "JPA, Spring, Spring Boot",
    },
  ]);

  const [post, setPost] = useState({
    title: "",
  });




  const onChange = (events) => {
    const copy = { ...post };
    copy[events.target.name] = events.target.value;
    setPost(copy);
  };

  const changeButtonClicked = () => {

    const copy = { ...post };
    console.log(copy)
    const copyPosts = [...posts];
    copyPosts[0].title = copy.title;
    setPosts(copyPosts);
  };

  const onPostClick = (post) => {
      setPost(post);
  }

  return (
    <>
      <div>
        <Posts posts={posts} onPostClick={onPostClick} />
      </div>
      <div>
        <UpdateTitle
          title={post.title}
          onChange={(event) => {
            onChange(event);
          }}
          changeButtonClicked={changeButtonClicked}
        />
      </div>
      <br></br>
      <div>
        <PostDetail post={post}/>
      </div>
    </>
  );
};

export default Dashboard;
