import { createSlice } from "@reduxjs/toolkit";

// 1. initialState
const initialState = {
  value: 0,
  inputValue: 0,
};

// 2. reudcers
const reducers = {
  increment: (state, action) => {
    const incresmentNum = action.payload;
    state.value += Number(incresmentNum);
  },
  decrement: (state, action) => {
    state.value -= 1;
  },
  incrementByAmount: (state, action) => {
    state.value += action.payload;
  },
  changeInut: (state, action) => {
    state.inputValue = action.value;
    console.log(action.value);
  },
};

// 3. slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers,
});

export const { increment, decrement, incrementByAmount, changeInut } = counterSlice.actions;

export default counterSlice.reducer;
