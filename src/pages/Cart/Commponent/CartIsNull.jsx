import { Link } from 'react-router-dom';
import React from 'react';
import './CartIsNull.scss';

function CartIsNull() {
  return (
    <div className="cartIsNull">
      <div className="emptyCart">
        <i className="fa-solid fa-bag-shopping" />
        <div className="cartNullDes">장바구니에 담긴 상품이 없습니다. </div>
        <Link to="/">
          <button className="cartKeepShopping">계속 쇼핑하기</button>
        </Link>
      </div>
    </div>
  );
}

export default CartIsNull;
