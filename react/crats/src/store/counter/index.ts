import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  isLoading: boolean;
  isDone: boolean;
  error: string | null;
}

const initialState: CounterState = {
  value: 0,
  isDone: false,
  isLoading: false,
  error: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.isLoading = true;
      state.isDone = false;
      state.error = null;
    },
    incrementSuccess: (state) => {
      state.isLoading = false;
      state.isDone = true;
      state.value += 1;
    },
    incrementFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isDone = false;
      state.error = action.payload;
    },
    decrement: (state) => {
      state.isLoading = true;
      state.isDone = false;
      state.error = null;
    },
    decrementSuccess: (state) => {
      state.isLoading = false;
      state.isDone = true;
      state.value -= 1;
    },
    decrementFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isDone = false;
      state.error = action.payload;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {
  increment,
  incrementSuccess,
  incrementFailure,
  decrement,
  decrementSuccess,
  decrementFailure,
  incrementByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
