import React from 'react';
import SIZES from './constantData/sizes';
import './filterBarSize.scss';
import SizeButton from './SizeButton';

function FilterBarSize({ selectedSize, setSelectedSize }) {
  console.log(selectedSize);

  return (
    <div className="filterSize">
      <div className="sizeHeader">
        <div className="sizeText">신발 사이즈</div>
        <img
          className="sizeIcon"
          src="./image/itemList/upArrow.png"
          alt="숨기기"
        />
      </div>
      <div className="sizeNumbers">
        {SIZES.map(size => {
          return (
            <SizeButton
              key={size}
              size={size}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FilterBarSize;
