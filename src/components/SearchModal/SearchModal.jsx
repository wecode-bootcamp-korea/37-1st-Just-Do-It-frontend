import React from 'react';
import './SearchModal.scss';

function SearchModal() {
  return (
    <div className="searchModal">
      <div className="header">
        <div>
          <p className="headerLeft">나이키</p>
        </div>
        <div className="headerCenter">
          <i className="fa-solid fa-magnifying-glass headerCenterIcon" />
          <input type="text" placeholder="검색" className="headerCenterInput" />
        </div>
        <div className="headerRight">
          <i className="fa-solid fa-x headerRightIcon" />
        </div>
      </div>
      <div className="searchInfo">
        <div>최근 검색어</div>
        <div>추천 검색어</div>
      </div>
    </div>
  );
}

export default SearchModal;
