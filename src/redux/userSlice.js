import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    login: {
      isFetching: false,
      data: null,
      error: false,
    },
    currentAddress: "",
  },
  reducers: {
    loginActionRedux: (state, action) => {
      state.login.data = action.payload;
    },
    logoutActionRedux: (state) => {
      state.login.data = null;
    },
    handlecurrentAddress: (state, action) => {
      state.currentAddress = action.payload;
    },
  },
});
export const { loginActionRedux, logoutActionRedux, handlecurrentAddress } = userSlice.actions;
export default userSlice.reducer;

//redux thunk : createAsyncThunk
