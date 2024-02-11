import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reducer, pageId } from './slice';
import { observer } from '../../utils/js/viewport';

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
    <div>
      <div>
        <input
          ref={inputRef}
          value={state.inputValue}
          onChange={(e) => callbacks.changeInput(e)}
        ></input>
        <button
          id="btn"
          className="btn"
          aria-label="Increment value"
          onClick={() => {
            callbacks.increment(1);
            initInput();
          }}
        >
          Increment
        </button>
        <span>{state.count}</span>
        <button
          className="bottom-btn"
          aria-label="Decrement value"
          onClick={() => dispatch(reducer.decrement())}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            const btn = document.getElementById('btn');
            console.log(1);
            observer.observe(btn);
          }}
        >
          observe
        </button>
      </div>
    </div>
  );
}
