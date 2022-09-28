import React from 'react';
import './ModalContentBox.scss';

function ModalContentBox({
  product,
  getThumbnail,
  shooseSize,
  quantity,
  retailPrice,
  styleCode,
  discountPrice,
}) {
  return (
    <div>
      <ul className="modalContentBox">
        <div>
          <img src={getThumbnail} className="modalImg" alt="나이키" />
        </div>
        <div className="modalInfo">
          <div className="modal">
            <p className="productName">{product}</p>
            <button>
              <img src="/image/x.png" className="modalDelete" alt="삭제" />
            </button>
          </div>
          <div>스타일 : {styleCode}</div>
          <div>사이즈 : {shooseSize}</div>
          <div>수량: {quantity}</div>
          <div
            className={`modalDetailName ${
              discountPrice === '' ? 'price0' : ''
            }`}
          >
            <div>
              <div className="retailPriceBox">{Number(retailPrice)}원</div>
              <div className="modalDiscountRatio">
                {Math.floor(
                  (1 - Number(discountPrice) / Number(retailPrice)) * 100
                )}
                % off
              </div>
            </div>
            <div className="modalDiscountPrice"> {Number(discountPrice)}원</div>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default ModalContentBox;
