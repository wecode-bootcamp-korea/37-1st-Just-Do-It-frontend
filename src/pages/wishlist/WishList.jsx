import React, { useState, useEffect } from 'react';
import { WISH_DATA } from './WISH_DATA';
import { WISH_MENU_DATA } from './WISH_DATA';
import { Link } from 'react-router-dom';
import './WishList.scss';
import WishItem from './components/WishItem';

function WishList() {
  const [addWish, setAddWish] = useState([]);

  useEffect(() => {
    // const token = localStorage.getItem('token');

    fetch('http://172.20.10.3:8000/wishlist', {
      method: 'GET',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlhdCI6MTY2NDQxNjUzNywiZXhwIjoxNjY1MTk0MTM3fQ.Lbkhw3B0kg7dKdXskMP1OvUk_gX2K8SLPn1mU8-duBI',
      },
    })
      .then(response => response.json())
      .then(data => {
        setAddWish(data);
      });
  }, [addWish]);

  return (
    <div className="wishList">
      <h1 className="wishTitle">위시리스트</h1>
      <div className="wishContainer">
        <div className="wishMenu">
          {WISH_MENU_DATA.map(({ name, menuId }) => {
            return (
              <Link to="/item-list" key={menuId} className="menuList">
                {name}
              </Link>
            );
          })}
        </div>
        <div className="wishListContainer">
          {WISH_DATA.map(
            ({ productId, thumbnail, name, price, userId, setAddWish }) => {
              return (
                <WishItem
                  key={productId}
                  productId={productId}
                  thumbnail={thumbnail}
                  name={name}
                  price={price}
                  userId={userId}
                  setAddWish={setAddWish}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default WishList;
