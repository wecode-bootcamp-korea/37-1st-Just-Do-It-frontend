import React, { useState } from 'react';
import './Main.scss';

function Main() {
  const [moveIndex, setMoveIndex] = useState(0);

  const leftMove = () => {
    if (moveIndex === 0) {
      return;
    }
    setMoveIndex(prev => prev + 10);
  };
  const rightMove = () => {
    setMoveIndex(prev => prev - 10);
  };
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
        <button onClick={leftMove}>left</button>
        <button onClick={rightMove}>right</button>
        <div
          className="thirdTitle"
          style={{ transform: `translateX(${moveIndex}%)` }}
        >
          {MAIN_FOOTER_IMG_DATA.map((e, idx) => {
            return (
              <div className="thirdImgBox" key={idx}>
                <img className="thirdImg" src={e.img} alt="#" />
                <h1 className="categoryText">{e.name}</h1>
                <p className="defaultText">{e.type}</p>
                <p className="defaultText">{e.price}원</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;

const MAIN_FOOTER_IMG_DATA = [
  {
    name: '고양이1',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이2',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이3',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이4',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이5',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
  {
    name: '고양이',
    img: 'https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2021/04/dog-portrait-4.jpeg?w=750',
    type: '남성 신발',
    price: '139,000',
  },
];
