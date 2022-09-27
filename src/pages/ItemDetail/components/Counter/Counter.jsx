import React, { useState } from 'react';
import './Counter.scss';

function Counter({ onDecrease, onIncrease, quantity, stock }) {
  const [] = useState('');
  return (
    <div className="Counter">
      <h1 className="countStart">{quantity}</h1>
      <div className="count">
        <button
          className="countOn"
          onClick={onDecrease}
          disabled={quantity <= 1}
        >
          -
        </button>
        <button
          className="countOn"
          onClick={onIncrease}
          disabled={quantity >= 10}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
