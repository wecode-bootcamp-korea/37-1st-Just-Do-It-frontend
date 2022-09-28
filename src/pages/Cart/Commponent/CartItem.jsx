import React, { useState } from 'react';
import OptModal from './OptModal';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './CartItem.scss';

function CartItem({ cartItems, setCartItems }) {
  const [cartIdParams, setCartIdParams] = useSearchParams();
  const [detailPage, setDetailPage] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [optItemInfo, setOptItemInfo] = useState('');

  const getSeletedCartId = id => {
    const optInfo = [cartItems].filter(cartItem => cartItem.cartId === id);
    setOptItemInfo(optInfo);
  };
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
  async function delCartItem(id) {
    setCartIdParams(cartIdParams);
    const response = await fetch(`http://192.168.243.221:8000/carts/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    });

    const data = await response.json();
    if (data.message === 'Cart is deleted') {
      console.log('삭제되었습니다.');
      fetch('http://192.168.243.221:8000/carts', {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      })
        .then(response => response.json())
        .then(response => setCartItems(response.result));
    }
  }

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
        onClick={() => {
          setIsOpenModal(prev => !prev);
          getSeletedCartId(cartId);
        }}
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
      <button onClick={() => delCartItem(cartId)}>
        <i className="fa-regular fa-trash-can del cartDelItem" />
      </button>
      <button className="addWishBtn">위시리스트에 추가</button>
      {isOpenModal && (
        <>
          <div className="optOverlay" onClick={() => setIsOpenModal(false)} />
          <OptModal
            cartItems={cartItems}
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            setCartItems={setCartItems}
            productId={productId}
            optItemInfo={optItemInfo}
          />
        </>
      )}
    </li>
  );
}

export default CartItem;
