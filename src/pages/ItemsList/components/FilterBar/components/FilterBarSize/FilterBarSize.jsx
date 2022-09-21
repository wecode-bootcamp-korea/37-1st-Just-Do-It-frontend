import React from 'react';
import SIZES from './constantData/sizes';
import './filterBarSize.scss';

function FilterBarSize({ sizeSelector }) {
  return (
    <div className="filterSize">
      <div className="sizeHeader">
        <div className="sizeText">신발 사이즈</div>
        <img className="sizeIcon" src="./image/itemList/upArrow.png" />
      </div>
      <div className="sizeNumbers">
        {SIZES.map(size => {
          return (
            <div className="sizeNumber" onClick={sizeSelector} key={size}>
              <div>{size}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBarSize;
