import React, { useState, useEffect } from 'react';
import { WISH_DATA } from './WISH_DATA';
import { Link } from 'react-router-dom';
import './WishList.scss';
// /item-detail/`${productId}`
function WishList() {
  const [addWish, setAddWish] = useState([]);
  const [wishCheck, setWishCheck] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token') || '';

    fetch('api', {
      method: 'GET',
      headers: { Authorization: token },
    })
      .then(response => response.json())
      .then(data => {
        setAddWish(data);
      });
  }, []);

  const handleDeleteCheck = () => {
    const token = localStorage.getItem('token') || '';
    //productId, userId
    if (window.confirm('삭제 하시겠습니까?')) {
      let filteredWish = addWish.filter(e => {
        return !wishCheck.includes(e.productId, e.userId);
      });
      addWish(filteredWish);
      fetch('api', {
        method: 'DELETE',
        headers: {
          Authorization: { Authorization: token },
        },
      });
    }
    setWishCheck([]);
  };

  return (
    <div className="wishList">
      <h1 className="wishTitle">위시리스트</h1>
      <div className="wishListContainer">
        {WISH_DATA.map(({ productId, thumbnail, name, price }) => {
          return (
            <div key={productId} className="wishItem">
              <button onClick={handleDeleteCheck}>
                <i className="fa-solid fa-x headerRightIcon" />
              </button>
              <div>
                <img src={thumbnail} alt="위시리스트사진" className="wishImg" />
                <p className="wishName">{name}</p>
                <p className="wishPrice">{price}원</p>
                <Link to="/item-list" className="wishMove">
                  장바구니담기
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WishList;
