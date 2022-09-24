import React, { useEffect, useState } from 'react';
import ModalForItemList from './components/Modal/ModalForItemList';
import ModarlPortalForItemList from './components/Modal/PortalForItemList';
import './listHeader.scss';

function ListHeader({
  filterHider,
  setFilterHider,
  sortStandard,
  setSortStandard,
}) {
  const [sortSetter, setSortSetter] = useState(false);
  const standardObject = {
    신상품순: '',
    판매순: 'salescount desc',
    '리뷰 많은 순': 'reviewcount desc',
    할인순: 'discountRate desc',
    '높은 가격순': 'price desc',
    '낮은 가격순': 'price asc',
  };

  const filterController = () => {
    setFilterHider(prev => !prev);
  };

  const sortController = event => {
    const newStandard = event.target.innerText;
    setSortSetter(prev => !prev);

    if (event.target.className === 'sortStandard') setSortStandard(newStandard);
  };

  useEffect(() => {
    const standardForSubmit = standardObject[sortStandard];
    console.log('sortStandard : ', sortStandard);
    console.log('standardForSubmit : ', standardForSubmit);

    fetch(`http://172.20.10.12:8000/products?`);
  }, [sortStandard]);

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
