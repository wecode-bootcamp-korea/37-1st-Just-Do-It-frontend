import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './CartItem.scss';

function CartItem({ cartItems, setCartItems, setIsOpenModal }) {
  const [cartIdParams, setCartIdParams] = useSearchParams();
  const [detailPage, setDetailPage] = useState('');
  const navigate = useNavigate();
  const {
    productId,
    discountPrice,
    cartId,
    thumbnail,
    quantity,
    productName,
    size,
    retailPrice,
    styleCode,
  } = cartItems;

  const setDelParams = e => {
    const delItem = e.target.id;
    console.log(delItem);
    cartIdParams.set('sort', `'${delItem}'`);
    setCartIdParams(cartIdParams);
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/carts/${cartIdParams}`, {
      method: 'DELETE',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjY0MjQwNzI2LCJleHAiOjE2NjUwMTgzMjZ9.4q9S_mW3KnqXinRL0N_0uMQHdMyZSc-IJbj8ERkzo4c',
      },
    })
      .then(res => {
        if (res.ok === true) return res.json();
        throw new Error('에러가 발생했습니다');
      })
      .catch(error => alert(error));
  }, [setDelParams]);

  const toDetailPage = e => {
    setDetailPage('e.target.id');
    navigate('/itemdetail', {
      state: {
        productId: detailPage,
      },
    });
  };

  return (
    <li className="cartItem" id={cartId}>
      <img
        className="cartItemImg"
        alt="제품"
        src={thumbnail}
        id={productId}
        onClick={toDetailPage}
      />
      <div className="cartItemInfo">
        <h6 className="cartItemTitle">{productName}</h6>
        <p className="cartItemDes">스타일 : {styleCode}</p>
        <p className="cartItemDes">사이즈 : {size}</p>
        <p className="cartItemDes">수량 : {quantity}</p>
      </div>
      <button
        className="cartOptChange"
        onClick={() => setIsOpenModal(prev => !prev)}
      >
        옵션 변경
      </button>
      <div className="cartItemPrice">
        <p
          className={
            Number(discountPrice) === 0 ? 'cartRetailPrice' : 'beforePrice'
          }
        >
          {Number(retailPrice).toLocaleString()}
        </p>
        <p
          className={
            Number(discountPrice) !== 0 ? 'cartRetailPrice' : 'cartPriceNone'
          }
        >
          {Number(discountPrice).toLocaleString()}
        </p>
      </div>
      <button>
        <i
          className="fa-regular fa-trash-can del cartDelItem"
          id={cartId}
          onClick={setDelParams}
        />
      </button>
      <button className="addWishBtn">위시리스트에 추가</button>
    </li>
  );
}

export default CartItem;
