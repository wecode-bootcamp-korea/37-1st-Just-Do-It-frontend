import React, { useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import ListContent from './components/ListContent/ListContent';
import ListHeader from './components/listHeader/ListHeader';

import './itemList.scss';

function ItemList() {
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);

  const colorSelector = event => {
    // asd
  };

  return (
    <section className="itemList">
      <ListHeader />
      <div className="itemListMain">
        <FilterBar
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <ListContent />
      </div>
    </section>
  );
}

export default ItemList;
