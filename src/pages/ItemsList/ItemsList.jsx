import React, { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import ListContent from './components/ListContent/ListContent';
import ListHeader from './components/listHeader/ListHeader';

import './itemList.scss';

function ItemList() {
  const [products, setProducts] = useState({});
  const [sortStandard, setSortStandard] = useState('신상품순');
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [filterHider, setFilterHider] = useState(true);

  const colorSelector = event => {
    // asd
  };

  useEffect(() => {
    fetch(
      `http://172.20.10.12:8000/products?offset=0&limit=5&sort=${sortStandard}`
    )
      .then(response => response.json())
      .then(result => setProducts(result.list));
  }, []);

  return (
    <section className="itemList">
      <ListHeader
        filterHider={filterHider}
        setFilterHider={setFilterHider}
        sortStandard={sortStandard}
        setSortStandard={setSortStandard}
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
          sortStandard={sortStandard}
        />
      </div>
    </section>
  );
}

export default ItemList;
