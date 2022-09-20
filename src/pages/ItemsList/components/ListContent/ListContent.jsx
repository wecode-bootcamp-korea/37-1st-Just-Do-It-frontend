import React from 'react';
import ContentHeader from './components/ContentHeader';
import ContentList from './components/ContentList';

function ListContent(props) {
  return (
    <div className="listContent">
      <ContentHeader />
      <ContentList />
    </div>
  );
}

export default ListContent;
