import { createSlice } from "@reduxjs/toolkit";

// 1. initialState
const initialState = {
  value: 0,
};

// 2. reudcers
const reducers = {
  increment: (state) => {
    state.value += 1;
  },
  decrement: (state) => {
    state.value -= 1;
  },
  incrementByAmount: (state, action) => {
    state.value += action.payload;
  },
};

// 3. slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers,
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
