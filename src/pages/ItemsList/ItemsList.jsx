import React, { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import ListContent from './components/ListContent/ListContent';
import ListHeader from './components/listHeader/ListHeader';

import './itemList.scss';

function ItemList() {
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [products, setProducts] = useState({});
  const [filterHider, setFilterHider] = useState(true);

  const colorSelector = event => {
    // asd
  };

  const filterController = () => {
    setFilterHider(prev => !prev);
  };

  useEffect(() => {
    fetch('http://172.20.10.12:8000/products?offset=0&limit=5')
      .then(response => response.json())
      .then(result => setProducts(result.list));
  }, []);

  return (
    <section className="itemList">
      <ListHeader
        filterController={filterController}
        filterHider={filterHider}
      />
      <div className="itemListMain">
        <FilterBar
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          filterHider={filterHider}
        />

        <ListContent
          products={products}
          setProducts={setProducts}
          filterHider={filterHider}
        />
      </div>
    </section>
  );
}

export default ItemList;
