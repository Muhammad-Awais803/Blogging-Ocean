import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: null,
  isuser: false,
  loading: false,
  error: null,
};

const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    userRegisterStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    userRegisterSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.isuser = action.payload.isuser;
    },
    userRegisterFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = userRegisterSlice;

export const userRegister = (formData) => async (dispatch) => {
  dispatch(actions.userRegisterStart());

  try {
    const response = await axios.post("/api/user/userregister", formData);
    // Access the data property of the response object
    const responseData = response.data;
    dispatch(actions.userRegisterSuccess(responseData));
    console.log(responseData);

    // Return the response object to be used in the .then block
    return response;
  } catch (error) {
    dispatch(actions.userRegisterFailure(error.message));
  }
};

export default userRegisterSlice.reducer;