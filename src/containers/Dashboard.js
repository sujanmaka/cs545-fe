import React, { createContext, useState } from "react";
import PostDetail from "../components/PostDetail";
import AddPost from "../components/AddPost";
import Posts from "./Posts";

export const AppContext = createContext(null);

const Dashboard = () => {
  const [selectedState, setSelectedState] = useState(0);
  const [fetchFlag, setFetchflag] = useState(true);

  const changeFetchFlag = () => {
    setFetchflag(!fetchFlag);
  };

  // const setSelected = (id) => {
  //   console.log(id);
  //   setSelectedState(id);
  // };

  return (
    <AppContext.Provider value={{ selectedState, setSelectedState }}>
      <div>
        <Posts
          fetchFlag={fetchFlag}
          // selectedState={selectedState}
          // setSelected={setSelected}
        />
      </div>
      <div>
        <PostDetail
          // id={selectedState}
          // setSelected={setSelected}
          changeFetchFlag={changeFetchFlag}
        />
      </div>
      <div>
        <AddPost changeFetchFlag={changeFetchFlag} />
      </div>
      <br></br>
    </AppContext.Provider>
  );
};

export default Dashboard;
