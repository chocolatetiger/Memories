import * as api from "../api";
import { createDispatchHook } from "react-redux";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
    console.log("success");
  } catch (error) {
    console.log("fail");
    console.log(error);
  }
};
