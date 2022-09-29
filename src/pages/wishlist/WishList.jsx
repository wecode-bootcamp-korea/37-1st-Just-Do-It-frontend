import React, { useState, useEffect } from 'react';
import { WISH_DATA } from './WISH_DATA';
// import { Link } from 'react-router-dom';
import './WishList.scss';
import WishItem from './components/WishItem';

function WishList() {
  const [addWish, setAddWish] = useState([]);

  useEffect(() => {
    // const token = localStorage.getItem('token');

    fetch(`${WISH_DATA}`, {
      method: 'GET',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlhdCI6MTY2NDM3MTk2NywiZXhwIjoxNjY1MTQ5NTY3fQ.DSE-pDdhK80473DQzO1_faMAPqYmwo-E4rNkFqeX_2Q',
      },
    })
      .then(response => response.json())
      .then(data => {
        setAddWish(data);
      });
  }, []);

  return (
    <div className="wishList">
      <h1 className="wishTitle">위시리스트</h1>
      <div className="wishListContainer">
        {addWish.map(
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
  );
}

export default WishList;
