import React from 'react';

const [flag, flag2, flag3, flag4, flag5] = [true, false, false, true, false];

export const sampleComponent1 = () => {
  return (
    <div>
      {flag && flag2 && !flag3 ? (
        flag4 ? (
          <p>Blah</p>
        ) : flag5 ? (
          <p>Meh</p>
        ) : (
          <p>Herp</p>
        )
      ) : (
        <p>Derp</p>
      )}
    </div>
  );
};

export const sampleComponent2 = () => {
  return (
    <div>
      {(() => {
        if (flag && flag2 && !flag3) {
          if (flag4) {
            return <p>Blah</p>;
          } else if (flag5) {
            return <p>Meh</p>;
          } else {
            return <p>Herp</p>;
          }
        } else {
          return <p>Derp</p>;
        }
      })()}
    </div>
  );
};
