import React, { useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import ListContent from './components/ListContent/ListContent';
import ListHeader from './components/listHeader/ListHeader';

import './itemList.scss';

function ItemList() {
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);

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

  const colorSelector = event => {
    // asd
  };

  return (
    <section className="itemList">
      <ListHeader />
      <div className="itemListMain">
        <FilterBar sizeSelector={sizeSelector} />
        <ListContent />
      </div>
    </section>
  );
}

export default ItemList;
