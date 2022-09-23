import React from 'react';
import { MAIN_FOOTER_IMG_DATA } from './MAIN_DATA';
import './Main.scss';

function Main() {
  // useEffect(() => {
  //   fetch('API').then(response => console.log(response));
  // }, []);
  return (
    <div>
      <div className="mainFirstImgWrapper">
        <h1 className="mainFirstImgTitle categoryText">Trending Now</h1>
        <div className="mainFristImgContainer">
          <div className="mainFirstImgBox" />
          <div className="mainSecondImgBox">
            <div className="mainSecondImg" />
            <div className="mainThirdImg" />
          </div>
        </div>
        <h1 className="mainSecondImgTitle categoryText">Trending Now</h1>
        <div className="mainSecondImgContainer">
          <div className="mainFirstImgBox" />
          <div className="mainSecondImgBox" />
        </div>
        <h1 className="mainThirdImgTitle categoryText">Trending Now</h1>
        <div className="thirdTitle">
          {MAIN_FOOTER_IMG_DATA.map(e => {
            return (
              <div className="thirdImgBox" key={e.id}>
                <img className="thirdImg" src={e.thumbnail} alt="#" />
                <h1 className="categoryText">{e.productName}</h1>
                <p className="defaultText">{e.brandName}</p>
                <p className="defaultText mb40">{e.retailPrice}원</p>
              </div>
            );
          })}
          <div className="scrollbar" />
        </div>
      </div>
    </div>
  );
}

export default Main;
