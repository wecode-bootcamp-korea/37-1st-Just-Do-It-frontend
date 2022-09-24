import React from 'react';
import './contentNext.scss';

function ContentNext({ products, setProducts, sortStandard }) {
  const offset = products.length !== undefined ? products.length : null;
  const nextItemGetter = () => {
    fetch(
      `http://172.20.10.12:8000/products?offset=${offset}&limit=6&sort=${sortStandard}`
    )
      .then(response => response.json())
      .then(result => setProducts(prev => [...prev, ...result.list]));
  };
  return (
    <button className="contentNext" onClick={nextItemGetter}>
      <div className="text">더 보기</div>
    </button>
  );
}

export default ContentNext;
