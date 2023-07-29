import React, { useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, changeInut } from "./slice";

export function ReduxPage() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const state = {
    count: useSelector((state) => state.counter.value),
    inputValue: useSelector((state) => state.counter.inputValue),
  };

  const initInput = () => {
    increment.current = 0;
  };

  return (
    <div>
      <div>
        <input ref={inputRef} value={state.inputValue} onChange={(e) => dispatch(changeInut(e))}></input>
        <button
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment(inputRef.current.value));
            initInput();
          }}>
          Increment
        </button>
        <span>{state.count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
