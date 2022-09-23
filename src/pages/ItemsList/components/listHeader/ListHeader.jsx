import React, { useState } from 'react';
import './listHeader.scss';

function ListHeader({ filterController, filterHider }) {
  const [sortSetter, setSortSetter] = useState(false);

  return (
    <header className="listHeader">
      <div className="headerLeft">Nike's 신발 (신발수)</div>
      <div className="headerRight">
        <div className="headerFilter" onClick={filterController}>
          <div className="text">필터</div>
          {filterHider === false ? (
            <img src="./image/itemList/filterWhite.png" alt="필터 가리기" />
          ) : (
            <img src="./image/itemList/filterBlack.png" alt="필터 펼치기" />
          )}
        </div>
        <div className="headerSetOrder">
          <div className="text">신상품순</div>
          {sortSetter === false ? (
            <img src="./image/itemList/downArrow.png" alt="정렬목록 펼치기" />
          ) : (
            <img src="./image/itemList/upArrow.png" alt="정렬목록 가리기" />
          )}
        </div>
      </div>
    </header>
  );
}

export default ListHeader;
