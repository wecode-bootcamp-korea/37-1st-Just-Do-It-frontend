import React from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import ListContent from './components/ListContent/ListContent';
import ListHeader from './components/ListHeader';

import './itemList.scss';

function ItemList() {
  return (
    <section className="itemList">
      <ListHeader />
      <div className="itemListMain">
        <FilterBar />
        <ListContent />
      </div>
    </section>
  );
}

export default ItemList;
