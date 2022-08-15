import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: {
      isFetching: false,
      data: {},
      error: false,
    },
  },
  reducers: {
    login: (state, action) => {
      state.login.data = action.payload;
    },
  },
});
export const { login } = userSlice.actions;
export default userSlice.reducer;

//redux thunk : createAsyncThunk
