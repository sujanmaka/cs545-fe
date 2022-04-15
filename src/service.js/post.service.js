import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/posts/";

const getPosts = () => {
  console.log(authHeader());
  return axios.get(API_URL, { headers: authHeader() });
};

const getPostById = (id) => {
  return axios.get(API_URL + id, { headers: authHeader() });
};

const deletePost = (id) => {
  return axios.delete(API_URL + id, { headers: authHeader() });
};

const createPost = (post) => {
  return axios.post(API_URL, post, { headers: authHeader() });
};

const PostService = {
  getPosts,
  deletePost,
  createPost,
  getPostById,
};

export default PostService;
