/// react
import React, { useRef } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { reducer, pageId } from './slice';
// css
import './reduxPage.css';
// utils
import { test } from 'utils/test';

export function ReduxPage() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const state = {
    count: useSelector((state) => state[pageId].value),
    inputValue: useSelector((state) => state[pageId].inputValue),
  };

  const callbacks = {
    changeInput: () => dispatch(reducer.changeInput()),
    increment: (args) => dispatch(reducer.increment(args)),
  };

  const initInput = () => {
    reducer.increment.current = 0;
  };

  return (
    <div className="redux-container">
      <div>
        <span>{state.count}</span>
      </div>
      <div>
        <button
          className="btn"
          aria-label="Increment value"
          onClick={() => {
            callbacks.increment(1);
            initInput();
          }}
        >
          +
        </button>
        <input
          className="redux-input"
          ref={inputRef}
          value={state.inputValue}
          onChange={(e) => callbacks.changeInput(e)}
        ></input>

        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(reducer.decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}
