import React, { useState } from 'react';
import './color.scss';

function Color({ name, code, nameEng, selectedColor, setSelectedColor }) {
  const [colorCheck, setColorCheck] = useState(false);

  const colorSelector = event => {
    const color = event.target.title;
    let colorArr = [...selectedColor];

    console.log('colorArr.indexOf(color) : ', colorArr.indexOf(color));

    colorArr.indexOf(color) === -1
      ? colorArr.push(color)
      : (colorArr = colorArr.filter(element => element !== color));

    console.log('colorArr : ', colorArr);

    setColorCheck(prev => !prev);
    setSelectedColor(colorArr);
  };

  return (
    <div className="color">
      <div
        className="colorCircle"
        style={{ backgroundColor: `${code}` }}
        title={nameEng}
        onClick={colorSelector}
      >
        {colorCheck && (
          <p className="colorCheck" title={nameEng}>
            ✓
          </p>
        )}
      </div>
      <div className="colorName">{name}</div>
    </div>
  );
}

export default Color;
