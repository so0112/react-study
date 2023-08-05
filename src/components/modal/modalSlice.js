import { createSlice } from "@reduxjs/toolkit";

export const pageId = "modal";
const initialState = { isOpen: false };

const reducers = {
  setModalState: (state) => {
    state.isOpen = !state.isOpen;
  },
};

const modalSlice = createSlice({
  name: pageId,
  initialState,
  reducers,
});

export const { setModalState } = modalSlice.actions;
export default modalSlice.reducer;
