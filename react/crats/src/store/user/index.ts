import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isLoading: boolean;
  isDone: boolean;
}

const initialState: UserState = {
  isLoading: false,
  isDone: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<string>) => {},
  },
});

export const { getData } = userSlice.actions;

export default userSlice.reducer;
