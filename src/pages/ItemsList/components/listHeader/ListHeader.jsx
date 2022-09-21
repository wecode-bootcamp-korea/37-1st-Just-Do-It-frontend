import React from 'react';
import './listHeader.scss';

function ListHeader(props) {
  return (
    <header className="listHeader">
      <div className="headerLeft">Nike's 신발 (신발수)</div>
      <div className="headerRight">
        <div className="headerFilter">
          <div className="text">필터</div>
          <img src="./image/itemList/filterWhite.png" />
        </div>
        <div className="headerSetOrder">
          <div className="text">신상품순</div>
          <img src="./image/itemList/downArrow.png" />
        </div>
      </div>
    </header>
  );
}

export default ListHeader;
