import React, { useEffect, useState } from 'react';
import OptModal from '../Commponent/OptModal';
import CartItem from '../Commponent/CartItem';
import './Cart.scss';

function Cart() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [getItems, setGetItems] = useState('');
  useEffect(() => {
    fetch('./data/cart.json')
      .then(response => response.json())
      .then(data => setGetItems(data));
  }, []);
  const cartItems = getItems;

  return (
    <div className="cart">
      <div className="cartHeader">
        <h2 className="cartTitle">장바구니</h2>
        <p className="cartItemsCounts">
          <span>0</span>개 상품
        </p>
      </div>
      <article className="cartWrapper">
        <section className="cartItemsListWrapper">
          <div className="cartItemsListHeader">
            <button className="cartDelItems">전체삭제</button>
          </div>
          <ul className="cartItemsList">
            {cartItems &&
              cartItems.result.map(cartItem => (
                <CartItem
                  setIsOpenModal={setIsOpenModal}
                  key={cartItem.cartId}
                  cartItem={cartItem}
                />
              ))}
          </ul>
        </section>
        <article className="cartRight">
          <section className="cartRightWrapper">
            <div className="checkoutTitle">주문예정금액</div>
            <div className="checkoutDetail">
              <div className="checkoutPrice detail">
                <span>상품금액</span>
                <span>238,000원</span>
              </div>
              <div className="checkout" />
              <div className="checkoutShippingPrice detail">
                <span>예상배송비</span>
                <span>0원</span>
              </div>
              <div className="checkoutDiscountedItem detail">
                <span>상품 할인 금액</span>
                <span>0원</span>
              </div>
              <div className="checkoutDiscountedPrice detail">
                <span>주문 할인 금액</span>
                <span>0원</span>
              </div>
              <div className="totalPrice">총 결제 예정 금액</div>
              <button className="checkoutOrderBtn">주문하기</button>
            </div>
          </section>
          <p className="coupon">
            *오퍼코드 : <span className="couponNum">2209welcome2nike</span>
          </p>
          <p className="couponDes">
            *사용 가능한 신규가입 쿠폰이 있습니다(1만원 할인 적용되며 장바구니
            전체에 5만원 이상 구매 시 적용됩니다.
          </p>
          <div className="inputCoupon">
            <form>
              <input
                className="couponCode"
                name="couponCode"
                type="text"
                placeholder="프로모션 코드 입력"
              />
              <button className="couponBtn">적용</button>
            </form>
          </div>
        </article>
      </article>
      {isOpenModal && (
        <OptModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
    </div>
  );
}

export default Cart;
