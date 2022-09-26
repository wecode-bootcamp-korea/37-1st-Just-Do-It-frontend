import React from 'react';
import { useState } from 'react';
import './Modal.scss';

function Modal({ closeModal, modal, product, getThumbnail, shooseSize }) {
  const [ItemDelete, setItemDelete] = useState('');

  const shoesDelete = () => {
    setItemDelete(prev => !prev);
    console.log(shoesDelete);
  };
  return (
    <div>
      {modal && (
        <div className="modal">
          <div onClick={closeModal} className="overlay" />

          <div className="modalContent">
            <div className="modalWrapper">
              <h2 className="modalSmallBasket">미니 장바구니</h2>
              <div className="modalContentBox">
                <div>
                  <img
                    key={getThumbnail.id}
                    src={product.thumbnail}
                    className="modalImg"
                    alt="나이키"
                  />
                </div>
                <div className="modalInfo">
                  <div className="modal">
                    <p>{product.productName}</p>
                    <button onClick={shoesDelete}>
                      <img
                        src="/image/x.png"
                        className="modalDelete"
                        alt="삭제"
                      />
                    </button>
                  </div>
                  <div>스타일 : {product.styleCode}</div>
                  <div>사이즈 : {shooseSize}</div>
                  <div>수량: 1</div>
                  <div>{Number(product.retailPrice)} 원</div>
                </div>
              </div>
              <div className="modalPurchase">
                <div className="modalPrice">
                  <div className="modaItemPrice">총 상품금액</div>
                  <div className="modalShoesPrice">189,000원</div>
                </div>
                <div className="modaItemPrice">
                  배송비는 주문서에서 확인이 가능합니다.
                </div>
                <div className="modalBasketBuy">
                  <button className="modalBasket">장바구니 가기</button>
                  <button className="modalBuy">바로 구매</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
