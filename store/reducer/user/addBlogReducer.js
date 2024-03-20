import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  message: null,
};

const addBlogSlice = createSlice({
  name: "addBlog",
  initialState,
  reducers: {
    addBlogStart: (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    addBlogSuccess: (state) => {
      state.loading = false;
      // Additional success logic if needed
    },
    addBlogFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = addBlogSlice;

export const addBlog = (formData) => async (dispatch) => {
  const token = localStorage.getItem("token"); // Get the token from localStorage

  dispatch(actions.addBlogStart());

  try {
    const response = await axios.post("/api/user/uploadblog", formData, {
      headers: {
        Authorization: `Bearer ${token}`, // Surround `${token}` with backticks
      },
    });

    dispatch(actions.addBlogSuccess());
    console.log(response);

    return response;
  } catch (error) {
    dispatch(actions.addBlogFailure(error.message));
  }
};

export default addBlogSlice.reducer;
