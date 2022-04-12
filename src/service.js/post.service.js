import axios from "axios";

const API_URL = "http://localhost:8080/posts/";

const getPosts = () => {
  return axios.get(API_URL);
};

const getPostById = (id) => {
  return axios.get(API_URL + id);
};

const deletePost = (id) => {
  return axios.delete(API_URL + id);
};

const createPost = (post) => {
  return axios.post(API_URL, post);
};

const PostService = {
  getPosts,
  deletePost,
  createPost,
  getPostById
};

export default PostService;
