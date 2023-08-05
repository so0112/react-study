import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice";
import modalSlice from "../components/modal/modalSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    modal: modalSlice,
  },
});
