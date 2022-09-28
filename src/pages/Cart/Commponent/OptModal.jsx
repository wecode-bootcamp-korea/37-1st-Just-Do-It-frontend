import React, { useState } from 'react';
import './OptModal.scss';

function OptModal({ setIsOpenModal, productId, optItemInfo, cartOptItems }) {
  const { retailPrice, discountPrice, quantity, productName } = optItemInfo[0];

  const [optCount, setOptCount] = useState(Number(quantity));

  const handleOptInputCount = e => {
    e.preventDefault();
    const toNum = Number(e.target.value);
    if (Number.isNaN(toNum)) return;
    setOptCount(toNum);
  };

  const handleOptPulsBtn = () => {
    setOptCount(prev => prev + 1);
  };

  const handleOptMinusBtn = () => {
    setOptCount(prev => prev - 1);
  };

  const changeOpt = e => {
    e.preventDefault();
    setIsOpenModal(prev => !prev);
  };

  return (
    <div className="optContainer">
      <section className="optImgsContainer">
        {cartOptItems &&
          cartOptItems.images.map((cartOptItem, idx) => {
            return (
              <img
                key={idx}
                className="optImg"
                alt="신발"
                src={cartOptItem.imageUrl}
              />
            );
          })}
      </section>
      <article className="optRight">
        <div className="optRightHeder">
          <span className="optItem">{cartOptItems.brandName}</span>
          <span className="optPrice">
            <p
              className={
                Number(discountPrice) === 0 ? 'cartRetailPrice' : 'beforePrice'
              }
            >
              {Number(retailPrice).toLocaleString()}원
            </p>
            <p
              className={
                Number(discountPrice) !== 0
                  ? 'cartRetailPrice'
                  : 'cartPriceNone'
              }
            >
              {Number(discountPrice).toLocaleString()}
            </p>
            원
          </span>
        </div>
        <div className="optItemTitle">{productName}</div>
        <div>
          <div className="optSeletSize">사이즈</div>
          <div className="optSizeContainer">
            {cartOptItems &&
              cartOptItems.productOptions.map(cartOptItem => {
                return (
                  <button
                    key={cartOptItem.productOptionId}
                    className="optSizeValue {cartOptItem.productOptionId}
                  "
                  >
                    {cartOptItem.size}
                  </button>
                );
              })}
          </div>
        </div>
        <div className="optChangeCount">
          <label className="optCountLabel">수량</label>
          <input
            className="itemCount"
            type="text"
            name="itemCount"
            value={optCount}
            onChange={handleOptInputCount}
          />
          <button className="cartCountDown" onClick={handleOptMinusBtn}>
            <i className="fa-solid fa-minus" />
          </button>
          <button className="cartCountUp" onClick={handleOptPulsBtn}>
            <i className="fa-solid fa-plus" />
          </button>
        </div>
        <button className="optChangeBtn" onClick={changeOpt}>
          옵션변경하기
        </button>
        <div className="optShipInfo">
          <i className="fa-solid fa-truck" />
          <span>오늘도착</span>
          <div>오후 1시까지 구매하시면, 오늘 도착합니다.</div>
        </div>
      </article>
    </div>
  );
}

export default OptModal;
