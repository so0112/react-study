import React, { useState } from "react";

const Ex_useState = () => {
  // 1. useState
  const [state, setState] = useState(true);

  // 2. setState 변경 함수
  const handleState = () => {
    setState(!state);
  };
  return (
    <React.Fragment>
      <div>
        State : {String(state)}
        {/* 3. setSate 변경함수 트리거 */}
        <button onClick={handleState} type="button">
          버튼
        </button>
      </div>
    </React.Fragment>
  );
};

export default Ex_useState;
