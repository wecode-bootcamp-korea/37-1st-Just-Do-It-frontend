import React from 'react';

function ContentHeader(props) {
  return (
    <div className="contentHeader">
      <div className="contentHeaderContainer">
        <div className="headerContent">
          <div className="textContainer">전체 보기</div>
        </div>
        <div className="headerContent">
          <div className="textContainer">신발</div>
        </div>
        <div className="headerContent">
          <div className="textContainer">의류</div>
        </div>
        <div className="headerContent">
          <div className="textContainer">용품</div>
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
