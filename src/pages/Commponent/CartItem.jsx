import React from 'react';
import './CartItem.scss';

function CartItem({ cartItem, setIsOpenModal }) {
  const { thumbnail, quantity, productName, size, retailPrice, styleCode } =
    cartItem;

  return (
    <li className="cartItem" id={styleCode}>
      <img className="cartItemImg" alt="제품" src={thumbnail} />
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
      <p className="cartItemPrice">{Number(retailPrice).toLocaleString()}</p>

      <button>
        {/* onClick={cartItemDel}> */}
        <i className="fa-regular fa-trash-can del cartDelItem" />
      </button>
      <button className="addWishBtn">위시리스트에 추가</button>
    </li>
  );
}

export default CartItem;
