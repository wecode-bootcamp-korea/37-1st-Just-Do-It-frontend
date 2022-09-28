import React from 'react';
import './CartAside.scss';

function CartAside({ cartItems }) {
  const sumCartRetailPrice = cartItems.reduce((sum, num) => {
    return (sum += num.quantity * Number(num.retailPrice));
  }, 0);

  const calCartDiscountedPrice = cartItems.reduce((sum, num) => {
    return (sum += num.quantity * Number(num.discountPrice));
  }, 0);

  return (
    <aside className="cartAside">
      <section className="cartCheckoutWrapper">
        <div className="checkoutTitle">주문예정금액</div>
        <div className="checkoutDetail">
          <div className="checkoutPrice detail">
            <span>상품금액</span>
            <span>{sumCartRetailPrice.toLocaleString()}원</span>
          </div>
          <div className="checkout" />
          <div className="checkoutShippingPrice detail">
            <span>예상배송비</span>
            <span>0원</span>
          </div>
          <div className="checkoutDiscountedItem detail">
            <span>상품 할인 금액</span>
            <span>
              {(sumCartRetailPrice - calCartDiscountedPrice).toLocaleString()}원
            </span>
          </div>
          <div className="checkoutDiscountedPrice detail">
            <span>주문 할인 금액</span>
            <span>0원</span>
          </div>
          <div className="totalPrice detail">
            <span>총 결제 예정 금액</span>
            <span>
              {calCartDiscountedPrice
                ? calCartDiscountedPrice.toLocaleString()
                : sumCartRetailPrice.toLocaleString()}
              원
            </span>
          </div>
          <button className="checkoutOrderBtn">주문하기</button>
        </div>
      </section>
      <div className="coupon">
        <form className="inputCoupon">
          <input
            className="couponCode"
            name="couponCode"
            type="text"
            placeholder="프로모션 코드 입력"
          />
          <button className="couponBtn">적용</button>
        </form>
      </div>
    </aside>
  );
}

export default CartAside;
