import React, { useState } from 'react';
import ModalForItemList from './components/Modal/ModalForItemList';
import ModarlPortalForItemList from './components/Modal/PortalForItemList';
import './listHeader.scss';

function ListHeader({
  filterHider,
  setFilterHider,
  sortStandard,
  setSortStandard,
  products,
}) {
  const [sortSetter, setSortSetter] = useState(false);

  const filterController = () => {
    setFilterHider(prev => !prev);
  };

  const sortController = event => {
    const newStandard = event.target.innerText;
    setSortSetter(prev => !prev);

    if (event.target.className === 'sortStandard') setSortStandard(newStandard);
  };

  return (
    <header className="listHeader">
      <div className="headerLeft">
        Nike's Wecode Edition ({products.length})
      </div>
      <div className="headerRight">
        <div className="headerFilter" onClick={filterController}>
          <div className="text">필터</div>
          {filterHider === false ? (
            <img src="./image/itemList/filterWhite.png" alt="필터 가리기" />
          ) : (
            <img src="./image/itemList/filterBlack.png" alt="필터 펼치기" />
          )}
        </div>
        <div className="headerSetOrder" onClick={sortController}>
          <div className="text">{sortStandard}</div>
          {sortSetter === false ? (
            <img src="./image/itemList/downArrow.png" alt="정렬목록 펼치기" />
          ) : (
            <img src="./image/itemList/upArrow.png" alt="정렬목록 가리기" />
          )}
          {sortSetter && (
            <ModarlPortalForItemList>
              <ModalForItemList />
            </ModarlPortalForItemList>
          )}
        </div>
      </div>
    </header>
  );
}

export default ListHeader;
