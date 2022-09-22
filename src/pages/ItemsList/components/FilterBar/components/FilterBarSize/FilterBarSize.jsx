import React from 'react';
import SIZES from './constantData/sizes';
import './filterBarSize.scss';

function FilterBarSize({ selectedSize, setSelectedSize }) {
  const sizeSelector = event => {
    const size = Number(event.nativeEvent.path[0].textContent);
    let sizeArr = selectedSize;

    sizeArr.indexOf(size) === -1
      ? sizeArr.push(size)
      : (sizeArr = sizeArr.filter(element => element !== size));

    event.target.className === ''
      ? event.nativeEvent.path[1].classList.toggle('selected')
      : event.target.classList.toggle('selected');

    setSelectedSize([...sizeArr]);
  };

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
