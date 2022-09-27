import React, { useEffect, useState } from 'react';
// import { MAIN_FOOTER_IMG_DATA } from './MAIN_DATA';
import { Link } from 'react-router-dom';
import { MAIN_CONFIG } from '../../config';
import './Main.scss';

function Main() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch(`${MAIN_CONFIG.api}`)
      .then(response => response.json())
      .then(({ list }) => setItemList(list))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="main">
      <div className="video">
        <video muted autoPlay loop width="80%">
          <source src="/videos/nikeRun33.mp4" type="video/mp4" alt="Nike Run" />
        </video>
      </div>
      <div className="videoTextContainer">
        <h1 className="infoHeader">JUST-DO-IT 데일리 런닝 컬렉션</h1>
        <p className="infoMain">
          선선한 날씨를 위한 런닝 컬렉션과 함께 데일리 룩을 완성해보세요.
        </p>
        <div className="videoButton">
          <Link to="item-list" className="buyButton btn">
            구매하기
          </Link>
          <Link to="item-list" className="infoButton btn">
            자세히 보기
          </Link>
        </div>
      </div>
      <div className="firstImgContainer">
        <div className="firstImgBox" />
        <div className="secondImgBox">
          <div className="secondImg" />
          <div className="mainThirdImg" />
        </div>
      </div>
      <div className="videoTextContainer">
        <h1 className="infoHeader">JUST-DO-IT 팀원 사진</h1>
        <p className="infoMain">뭐라고 쓸지 진짜 모르겠다 아.....</p>
        <div className="videoButton">
          <Link to="item-list" className="buyButton btn">
            구매하기
          </Link>
          <Link to="item-list" className="infoButton btn">
            자세히 보기
          </Link>
        </div>
      </div>
      <div className="secondImgContainer">
        <div className="firstImgBox" />
        <div className="secondImgBox" />
      </div>
      <div className="videoTextContainer">
        <h1 className="infoHeader">JUST-DO-IT 팀원 사진</h1>
        <p className="infoMain">뭐라고 쓸지 진짜 모르겠다 아.....</p>
        <div className="videoButton">
          <Link to="item-list" className="buyButton btn">
            구매하기
          </Link>
          <Link to="item-list" className="infoButton btn">
            자세히 보기
          </Link>
        </div>
      </div>
      <h1 className="thirdImgTitle categoryText">추천 상품</h1>
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
