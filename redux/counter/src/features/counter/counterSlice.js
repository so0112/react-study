import { createSlice } from '@reduxjs/toolkit';

// 초기 state
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {},
});

// state
export const selectCount = (state) => state.counter.value;

// actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// reducer
export default counterSlice.reducer;
