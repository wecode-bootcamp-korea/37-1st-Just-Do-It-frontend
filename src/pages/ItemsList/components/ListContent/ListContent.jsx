import React from 'react';
import ContentHeader from './components/ContentHeader/ContentHeader';
import ContentNext from './components/ContentList/components/ContentNext/ContentNext';
import ContentList from './components/ContentList/ContentList';
import './listContent.scss';

function ListContent({ products, setProducts }) {
  return (
    <div className="listContent">
      <ContentHeader />
      <ContentList products={products} />
      <ContentNext products={products} setProducts={setProducts} />
    </div>
  );
}

export default ListContent;
