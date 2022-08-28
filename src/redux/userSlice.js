import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    login: {
      isFetching: false,
      data: null,
      error: false,
    },
  },
  reducers: {
    loginActionRedux: (state, action) => {
      state.login.data = action.payload;
    },
    logoutActionRedux: (state) => {
      state.login.data = null;
    },
  },
});
export const { loginActionRedux, logoutActionRedux } = userSlice.actions;
export default userSlice.reducer;

//redux thunk : createAsyncThunk
