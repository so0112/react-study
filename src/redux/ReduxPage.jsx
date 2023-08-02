import React, { useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reducer, pageId } from "./slice";

export function ReduxPage() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const state = {
    count: useSelector((state) => state[pageId].value),
    inputValue: useSelector((state) => state[pageId].inputValue),
  };

  const callbacks = {
    changeInput: useCallback(() => {
      dispatch(reducer.changeInput());
    }, []),
    increment: useCallback((args) => {
      dispatch(reducer.increment(args));
    }, []),
  };

  const initInput = () => {
    reducer.increment.current = 0;
  };

  return (
    <div>
      <div>
        <input ref={inputRef} value={state.inputValue} onChange={(e) => callbacks.changeInput(e)}></input>
        <button
          aria-label="Increment value"
          onClick={() => {
            callbacks.increment(1);
            initInput();
          }}>
          Increment
        </button>
        <span>{state.count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(reducer.decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
