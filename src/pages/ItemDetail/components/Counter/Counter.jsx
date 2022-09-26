import React, { useState } from 'react';
import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(1);

  const onIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };
  const onDecrease = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div className="Counter">
      <h1 className="countStart">{count}</h1>
      <div className="count">
        <button className="countOn" onClick={onDecrease} disabled={count <= 1}>
          -
        </button>
        <button className="countOn" onClick={onIncrease} disabled={count >= 10}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
