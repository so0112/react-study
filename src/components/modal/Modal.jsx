import React from "react";

import "./modal.css";

import { useSelector, useDispatch } from "react-redux";
import { setModalState, pageId } from "./modalSlice";

const Modal = () => {
  const state = { isOpenModal: useSelector((state) => state[pageId].isOpen) };

  return (
    <>
      <button>모달 온오프</button>
      {state.isOpenModal && <div className="modal">Modal</div>}
    </>
  );
};

export default Modal;
