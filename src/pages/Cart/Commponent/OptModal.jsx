import React, { useState } from 'react';
import './OptModal.scss';

function OptModal({ setIsOpenModal, cartItems, setCartItems }) {
  const { quantity, productName, size, retailPrice } = cartItems;
  const [optCount, setOptCount] = useState(1);

  const handleOptInputCount = e => {
    const toNum = Number(e.target.value);
    if (Number.isNaN(toNum)) return;
    setOptCount(toNum);
  };

  const handleOptPulsBtn = () => {
    setOptCount(optCount + 1);
  };

  const handleOptMinusBtn = () => {
    setOptCount(optCount - 1);
  };

  const changeOpt = () => {
    setIsOpenModal(prev => !prev);
  };

  return (
    <div className="optContainer">
      <section className="optImgsContainer">
        <img
          className="optImg"
          alt="신발"
          src="https://cdn.pixabay.com/photo/2021/04/13/19/41/elephants-6176590_1280.jpg"
        />
        <img
          className="optImg"
          alt="신발"
          src="https://cdn.pixabay.com/photo/2021/04/13/19/41/elephants-6176590_1280.jpg"
        />
        <img
          className="optImg"
          alt="신발"
          src="https://cdn.pixabay.com/photo/2021/04/13/19/41/elephants-6176590_1280.jpg"
        />
        <img
          className="optImg"
          alt="신발"
          src="https://cdn.pixabay.com/photo/2021/04/13/19/41/elephants-6176590_1280.jpg"
        />
        <img
          className="optImg"
          alt="신발"
          src="https://cdn.pixabay.com/photo/2021/04/13/19/41/elephants-6176590_1280.jpg"
        />
        <img
          className="optImg"
          alt="신발"
          src="https://cdn.pixabay.com/photo/2021/04/13/19/41/elephants-6176590_1280.jpg"
        />
      </section>
      <article className="optRight">
        <div className="optRightHeder">
          <span className="optItem">남성신발</span>
          <span className="optPrice">{retailPrice}원</span>
        </div>
        <div className="optItemTitle">{productName}</div>
        <div>
          <div className="optSeletSize">사{size}</div>
          <div className="optSizeContainer">
            <button className="optSizeValue">245</button>
            <button className="optSizeValue">250</button>
            <button className="optSizeValue">240</button>
            <button className="optSizeValue">255</button>
            <button className="optSizeValue">260</button>
            <button className="optSizeValue">265</button>
            <button className="optSizeValue">270</button>
            <button className="optSizeValue">275</button>
            <button className="optSizeValue">280</button>
            <button className="optSizeValue">285</button>
            <button className="optSizeValue">290</button>
            <button className="optSizeValue">295</button>
            <button className="optSizeValue">300</button>
            <button className="optSizeValue">305</button>
            <button className="optSizeValue">310</button>
          </div>
        </div>
        <div className="optChangeCount">
          <label className="optCountLabel">수량</label>
          <input
            className="itemCount"
            type="text"
            name="itemCount"
            value={quantity}
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
