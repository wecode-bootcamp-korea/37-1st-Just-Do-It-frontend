import React from 'react';
import './SearchModal.scss';

function SearchModal() {
  return (
    <div className="searchModalWrapper">
      <div className="searchModal">
        <div>
          <p className="searchModalLeftText">나이키</p>
        </div>
        <div className="searchModalCenter">
          <i className="fa-solid fa-magnifying-glass searchModalCenterIcon" />
          <input
            type="text"
            placeholder="검색"
            className="searchModalCenterInput"
          />
        </div>
        <div className="searchModalRight">
          <i className="fa-solid fa-x searchModalRightIcon" />
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
