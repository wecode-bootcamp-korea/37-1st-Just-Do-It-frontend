import React from 'react';
import './Cart.scss';

function Cart() {
  return (
    <>
      <div className="cartHeader">
        <h2 className="cartTitle">장바구니</h2>
        <p className="cartItemNum">
          <span>0</span>개 상품
        </p>
      </div>

      <article className="cartWrapper">
        <section className="cartItemsListWrapper">
          <div className="cartItemsListHeader">
            <button className="cartDelItems">전체삭제</button>
          </div>
          <div className="cartItemsList">
            <img
              className="cartItemImg"
              alt="제품"
              src={`${process.env.PUBLIC_URL}image/shoe-01.jpg`}
            />
            <div className="cartItemInfo">
              <h6 className="cartItemTitle">나이키코트 리액트 베이퍼</h6>
              <p className="cartItemDes">스타일 : CV0724-002</p>
              <p className="cartItemDes">사이즈 : 250</p>
              <p className="cartItemDes">수량 : 2</p>
            </div>
            <button className="cartOptChange">옵션 변경</button>
            <p className="cartItemPrice">189,000</p>
            <button>
              <i class="fa-regular fa-trash-can del cartDelItem" />
            </button>
          </div>
          <button className="addWishBtn">위시리스트에 추가</button>
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
    </>
  );
}

export default Cart;
