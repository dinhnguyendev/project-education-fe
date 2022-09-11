import { createSlice } from "@reduxjs/toolkit";
const GameCaroSlice = createSlice({
  name: "user",
  initialState: {
    boardData: [],
  },
  reducers: {
    createBoardDataAction: (state, action) => {
      state.boardData = action.payload;
    },
  },
});
export const { createBoardDataAction } = GameCaroSlice.actions;
export default GameCaroSlice.reducer;

//redux thunk : createAsyncThunk
