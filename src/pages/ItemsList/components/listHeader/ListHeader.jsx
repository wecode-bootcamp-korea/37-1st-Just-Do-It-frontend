import React, { useEffect, useState } from 'react';
import ModalForItemList from './components/Modal/ModalForItemList';
import ModarlPortalForItemList from './components/Modal/PortalForItemList';
import './listHeader.scss';

function ListHeader({
  filterHider,
  setFilterHider,
  sortStandard,
  setSortStandard,
  sortStandardForSubmit,
  setProducts,
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

  useEffect(() => {
    fetch(
      `http://172.20.10.12:8000/products?offset=0&limit=5&sort=${sortStandardForSubmit}`
    )
      .then(response => response.json())
      .then(result => setProducts(result.list));
  }, []);

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
