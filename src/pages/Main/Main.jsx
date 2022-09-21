import React from 'react';
import './Main.scss';

function Main() {
  return (
    <div>
      <div className="mainFirstImgWrapper">
        <h1 className="mainFirstImgTitle">Trending Now</h1>
        <div className="mainFristImgContainer">
          <div className="mainFirstImgBox" />
          <div className="mainSecondImgBox">
            <div className="mainSecondImg" />
            <div className="mainThirdImg" />
          </div>
        </div>
        <h1 className="mainSecondImgTitle">Trending Now</h1>
        <div className="mainSecondImgContainer">
          <div className="mainFirstImgBox" />
          <div className="mainSecondImgBox" />
        </div>
      </div>
    </div>
  );
}

export default Main;
