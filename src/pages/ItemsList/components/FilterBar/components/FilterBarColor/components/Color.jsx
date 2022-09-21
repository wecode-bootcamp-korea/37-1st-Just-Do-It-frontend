import React from 'react';
import './color.scss';

function Color({ name, code }) {
  return (
    <div className="color">
      <div className="colorCircle" style={{ backgroundColor: `${code}` }} />
      <div className="colorName">{name}</div>
    </div>
  );
}

export default Color;
