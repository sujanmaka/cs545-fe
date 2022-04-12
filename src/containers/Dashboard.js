import React, { useState } from "react";
import PostDetail from "../components/PostDetail";
import AddPost from "../components/AddPost";
import Posts from "./Posts";

const Dashboard = () => {
  // const [showPostDetails, setShowPostDetails] = useState(false);
  const [selectedState, setSelectedState] = useState(0);
  const [fetchFlag, setFetchflag] = useState(true);

  const changeFetchFlag = () => {
    setFetchflag(!fetchFlag);
  };

  // const onPostClick = (post) => {
  //   setShowPostDetails(true);
  //   setPost(post);
  // };

  const setSelected = (id) => {
    console.log(id);
    setSelectedState(id);
  };

  return (
    <>
      <div>
        <Posts fetchFlag={fetchFlag} setSelected={setSelected} />
      </div>
      <div>
        <PostDetail id={selectedState} changeFetchFlag={changeFetchFlag} />
      </div>
      <div>
        <AddPost changeFetchFlag={changeFetchFlag} />
      </div>
      <br></br>
    </>
  );
};

export default Dashboard;
