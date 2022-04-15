import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddPost from "../components/AddPost";
import Login from "../components/Login";
import PostDetail from "../components/PostDetail";
import Posts from "./Posts";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/posts" />} />
      <Route path="posts" element={<Posts />}>
        <Route path=":id" element={<PostDetail />} />
      </Route>
      <Route path="create-post" element={<AddPost />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default PageRoutes;
