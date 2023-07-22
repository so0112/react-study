import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./slice";

export function ReduxPage() {
  const dispatch = useDispatch();

  const state = {
    count: useSelector((state) => state.counter.value),
  };

  const callbacks = {};

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
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
