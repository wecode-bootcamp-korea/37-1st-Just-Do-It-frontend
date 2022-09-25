import React, { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import ListContent from './components/ListContent/ListContent';
import ListHeader from './components/listHeader/ListHeader';

import './itemList.scss';

function ItemList() {
  const [products, setProducts] = useState({});
  const [sortStandard, setSortStandard] = useState('신상품순');
  const [filterHider, setFilterHider] = useState(true);

  const standardObject = {
    신상품순: '',
    판매순: 'salescount desc',
    '리뷰 많은 순': 'reviewcount desc',
    할인순: 'discountRate desc',
    '높은 가격순': 'price desc',
    '낮은 가격순': 'price asc',
  };

  const sortStandardForSubmit = standardObject[sortStandard];

  console.log(products);

  useEffect(() => {
    setProducts([]);
    fetch(
      `http://172.20.10.12:8000/products?offset=0&limit=5&sort=${sortStandardForSubmit}`
    )
      .then(response => response.json())
      .then(result => setProducts(result.list));
  }, [sortStandard]);

  return (
    <section className="itemList">
      <ListHeader
        filterHider={filterHider}
        setFilterHider={setFilterHider}
        sortStandard={sortStandard}
        setSortStandard={setSortStandard}
        sortStandardForSubmit={sortStandardForSubmit}
        setProducts={setProducts}
      />
      <div className="itemListMain">
        <FilterBar filterHider={filterHider} />

        <ListContent
          products={products}
          setProducts={setProducts}
          filterHider={filterHider}
          sortStandard={sortStandard}
          sortStandardForSubmit={sortStandardForSubmit}
        />
      </div>
    </section>
  );
}

export default ItemList;
