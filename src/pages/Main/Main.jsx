import React, { useEffect, useState } from 'react';
// import { MAIN_FOOTER_IMG_DATA } from './MAIN_DATA';
import './Main.scss';

function Main() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('http://172.20.10.12:8000/products/?offset=0&limit=19')
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(result => setItemList(result.list))
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="main">
      <h1 className="videoImgTitle categoryText">
        JUST-DO-IT 이승훈은 어떤사람일까 ?
      </h1>
      <div className="video">
        <video muted autoPlay loop width="80%">
          <source src="/videos/nikeRun33.mp4" type="video/mp4" alt="Nike Run" />
        </video>
      </div>
      <div className="videoTextContainer">
        <h1 className="infoHeader">이승훈의 달리기</h1>
        <p className="videoInfo">
          선선한 날씨를 위한 가을 컬렉션과 함께 데일리 룩을 완성해보세요.
        </p>
        <div className="videoButton">
          <button className="buyButton btn">구매하기</button>
          <button className="infoButton btn">자세히 보기</button>
        </div>
      </div>
      <h1 className="firstImgTitle categoryText">이승훈의 신발</h1>
      <div className="firstImgContainer">
        <div className="firstImgBox" />
        <div className="secondImgBox">
          <div className="secondImg" />
          <div className="mainThirdImg" />
        </div>
      </div>
      <div className="videoTextContainer">
        <h1 className="infoHeader">이승훈의 달리기</h1>
        <p className="videoInfo">
          선선한 날씨를 위한 가을 컬렉션과 함께 데일리 룩을 완성해보세요.
        </p>
        <div className="videoButton">
          <button className="buyButton btn">구매하기</button>
          <button className="infoButton btn">자세히 보기</button>
        </div>
      </div>
      <h1 className="secondImgTitle categoryText">이승훈의 옷</h1>
      <div className="secondImgContainer">
        <div className="firstImgBox" />
        <div className="secondImgBox" />
      </div>
      <div className="videoTextContainer">
        <h1 className="infoHeader">이승훈의 달리기</h1>
        <p className="videoInfo">
          선선한 날씨를 위한 가을 컬렉션과 함께 데일리 룩을 완성해보세요.
        </p>
        <div className="videoButton">
          <button className="buyButton btn">구매하기</button>
          <button className="infoButton btn">자세히 보기</button>
        </div>
      </div>
      <h1 className="thirdImgTitle categoryText">Featured Shoes</h1>
      <div className="thirdTitle">
        {itemList.map(
          ({ id, thumbnail, productName, brandName, retailPrice }) => {
            return (
              <div className="thirdImgBox" key={id}>
                <img className="thirdImg" src={thumbnail} alt="#" />
                <h1 className="categoryText">{productName}</h1>
                <p className="defaultText">{brandName}</p>
                <p className="defaultText mb40">{retailPrice}원</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Main;
