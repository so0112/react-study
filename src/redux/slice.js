import { createSlice } from "@reduxjs/toolkit";

export const pageId = "counter";
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
  changeInput: (state, action) => {
    state.inputValue = action.value;
    console.log(action.payload);
  },
};

// 3. slice
const counterSlice = createSlice({
  name: pageId,
  initialState,
  reducers,
});

export const reducer = counterSlice.actions;

export default counterSlice.reducer;
