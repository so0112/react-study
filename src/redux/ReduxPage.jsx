import React, { useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./slice";

export function ReduxPage() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const state = {
    count: useSelector((state) => state.counter.value),
  };

  return (
    <div>
      <div>
        <input ref={inputRef}></input>
        <button aria-label="Increment value" onClick={() => dispatch(increment(inputRef.current.value))}>
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
