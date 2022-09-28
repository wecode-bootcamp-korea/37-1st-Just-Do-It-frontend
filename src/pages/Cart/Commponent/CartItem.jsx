import React, { useEffect, useState } from 'react';
import OptModal from './OptModal';
import { useNavigate } from 'react-router-dom';
import { CART_ORDER } from '../../../config';
import './CartItem.scss';

function CartItem({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [optItemInfo, setOptItemInfo] = useState('');
  const [cartOptItems, setCartOptItems] = useState('');
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

  const getSeletedCartId = id => {
    const optInfo = [cartItems].filter(cartItem => cartItem.cartId === id);
    setOptItemInfo(optInfo);
  };

  const postWish = id => {
    fetch('http://192.168.43.111:8000/wishlist/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        productId: 'productId',
      }),
    });
  };

  //데이터 삭제하기
  async function delCartItem(id) {
    const response = await fetch(`http://192.168.243.221:8000/carts/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    });
    if (response.ok === true) {
      fetch('http://192.168.243.221:8000/carts', {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      })
        .then(response => response.json())
        .then(response => setCartItems(response.result));
    }
  }

  useEffect(() => {
    fetch('data/cartOpt.json')
      .then(res => res.json())
      .then(res => setCartOptItems(res));
  }, []);

  // 데이터 받아오기
  useEffect(() => {
    const getOptItemInfo = id => {
      fetch(`http://192.168.243.221:8000/carts/detail?productId=${id}`, {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      })
        .then(res => {
          if (res.ok === true) {
            return res.json();
          }
          throw new Error('에러가 발생했습니다');
        })
        .catch(error => console.log(error))
        .then(data => setCartOptItems(data));
    };
  }, [cartOptItems]);

  const toDetailPage = id => {
    navigate('/item-detail', {
      state: {
        productId: id,
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
        onClick={() => toDetailPage(productId)}
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
          getOptItemInfo(productId);
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
      <button className="addWishBtn" onClick={() => postWish(productId)}>
        위시리스트에 추가
      </button>
      {isOpenModal && (
        <>
          <div className="optOverlay" onClick={() => setIsOpenModal(false)} />
          <OptModal
            setIsOpenModal={setIsOpenModal}
            productId={productId}
            optItemInfo={optItemInfo}
            cartOptItems={cartOptItems}
          />
        </>
      )}
    </li>
  );
}

export default CartItem;
