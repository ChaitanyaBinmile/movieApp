import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      console.log(state,action)
    },
    removeCredentials: (state)=>{
        state.user = null;
        state.token= null;
    }
  },
});

export const { setCredentials,removeCredentials } = authSlice.actions;
export default authSlice.reducer;

// export const selectCurrentUser = (state) => state.auth.user
// export const selectCurrentToken = (state) => state.auth.token