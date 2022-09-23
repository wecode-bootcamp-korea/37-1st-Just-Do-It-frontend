import React from 'react';
import ContentHeader from './components/ContentHeader/ContentHeader';
import ContentList from './components/ContentList/ContentList';
import './listContent.scss';

function ListContent(props) {
  return (
    <div className="listContent">
      <ContentHeader />
      <ContentList />
    </div>
  );
}

export default ListContent;
