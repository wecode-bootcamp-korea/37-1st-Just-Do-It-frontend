import React from 'react';
import Color from './components/Color';

import COLORS from './constantData/colorsForFilter';

import './filterBarColor.scss';

function FilterBarColor(props) {
  return (
    <div className="filterBarColor">
      <div className="colorHeader">
        <div className="colorText">색상</div>
        <img
          className="colorIcon"
          src="./image/itemList/upArrow.png"
          alt="숨기기"
        />
      </div>
      <div className="colors">
        {COLORS.map(color => {
          return <Color name={color.name} key={color.code} code={color.code} />;
        })}
      </div>
    </div>
  );
}

export default FilterBarColor;
