import React from 'react';
import ContentHeader from './components/ContentHeader/ContentHeader';
import ContentNext from './components/ContentList/components/ContentNext/ContentNext';
import ContentList from './components/ContentList/ContentList';
import './listContent.scss';

function ListContent({ products, setProducts, filterHider, sortStandard }) {
  return (
    <div
      className="listContent"
      style={filterHider !== true ? { marginLeft: 0 } : null}
    >
      <ContentHeader />
      <ContentList products={products} />
      <ContentNext
        products={products}
        setProducts={setProducts}
        sortStandard={sortStandard}
      />
    </div>
  );
}

export default ListContent;
