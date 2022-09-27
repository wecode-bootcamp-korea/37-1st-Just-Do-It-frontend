import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from './components/FilterBar/FilterBar';
import ListContent from './components/ListContent/ListContent';
import ListHeader from './components/listHeader/ListHeader';
import standardObject from './components/FilterBar/constantData/standardObject';

import './itemList.scss';

function ItemList() {
  const [products, setProducts] = useState([]);
  const [sortStandard, setSortStandard] = useState('신상품순');
  const [filterHider, setFilterHider] = useState(true);
  const [checkList, setCheckList] = useState({});
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const [nextHider, setNextHider] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const itemListCount = useRef();

  useEffect(() => {
    const sortStandardForSubmit = standardObject[sortStandard];
    let urlForSubmit = `offset=${offset}&limit=${limit}&sort=${sortStandardForSubmit}&`;

    selectedSize.map(size => (urlForSubmit = urlForSubmit + `size=${size}&`));
    selectedColor.map(
      color => (urlForSubmit = urlForSubmit + `color=${color}&`)
    );
    for (const checkListName in checkList) {
      checkList[checkListName].map(
        // eslint-disable-next-line no-loop-func
        checkedList =>
          (urlForSubmit = urlForSubmit + `${checkListName}=${checkedList}&`)
      );
    }

    setSearchParams(urlForSubmit);
    fetch('http://172.20.10.12:8000/products/?' + urlForSubmit)
      .then(response => response.json())
      .then(result => {
        const inputItemCount =
          result.list.length - itemListCount.current.children.length;
        if (inputItemCount < 4) setNextHider(false);
        setProducts(prev => result.list);
      });
  }, [offset, limit, checkList, selectedColor, selectedSize, sortStandard]);

  return (
    <section className="itemList">
      <ListHeader
        filterHider={filterHider}
        setFilterHider={setFilterHider}
        sortStandard={sortStandard}
        setSortStandard={setSortStandard}
        products={products}
      />
      <div className="itemListMain">
        <FilterBar
          filterHider={filterHider}
          checkList={checkList}
          setCheckList={setCheckList}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />

        <ListContent
          products={products}
          setProducts={setProducts}
          filterHider={filterHider}
          sortStandard={sortStandard}
          setOffset={setOffset}
          setLimit={setLimit}
          itemListCount={itemListCount}
          nextHider={nextHider}
        />
      </div>
    </section>
  );
}

export default ItemList;
