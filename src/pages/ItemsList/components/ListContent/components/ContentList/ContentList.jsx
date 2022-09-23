import React, { useState } from 'react';
import CONTENTS_MOCK from './mockData/contentMock';
import './contentList.scss';
import AdvertiseItem from './components/AdvertiseItem/AdvertiseItem';

function ContentList({ products }) {
  return (
    <div className="contentItems">
      <div className="contentItemContainor">
        <div className="contentItem">
          <AdvertiseItem />
        </div>
        {CONTENTS_MOCK.length !== undefined
          ? CONTENTS_MOCK.map(
              ({
                id,
                styleCode,
                thumbnail,
                productName,
                description,
                brandName,
                color,
                discountPrice,
                retailPrice,
                releaseDate,
              }) => {
                return (
                  <div className="contentItem" key={id}>
                    <div
                      className="itemImg"
                      style={{ backgroundColor: `white` }}
                    >
                      <div className="itemDecription">
                        <p>
                          상품 상세 설명 엄ㅊ어길다 엄청 긴 상품리스티이다.
                          이것은 엄청 길기 때문에 엄청 길게 보일것이다. 왜냐하면
                          엄청 길기 때문이다. 길다길어 마치 나의 다리길이처럼
                          말이지 상품 상세 설명 엄ㅊ어길다 엄청 긴
                          상품리스티이다. 이것은 엄청 길기 때문에 엄청 길게
                          보일것이다. 왜냐하면 엄청 길기 때문이다. 길다길어 마치
                          나의 다리길이처럼 말이지 상품 상세 설명 엄ㅊ어길다
                          엄청 긴 상품리스티이다. 이것은 엄청 길기 때문에 엄청
                          길게 보일것이다. 왜냐하면 엄청 길기 때문이다. 길다길어
                          마치 나의 다리길이처럼 말이지 상품 상세 설명
                          엄ㅊ어길다 엄청 긴 상품리스티이다. 이것은 엄청 길기
                          때문에 엄청 길게 보일것이다. 왜냐하면 엄청 길기
                          때문이다. 길다길어 마치 나의 다리길이처럼 말이지 상품
                          상세 설명 엄ㅊ어길다 엄청 긴 상품리스티이다. 이것은
                          엄청 길기 때문에 엄청 길게 보일것이다. 왜냐하면 엄청
                          길기 때문이다. 길다길어 마치 나의 다리길이처럼 말이지
                          상품 상세 설명 엄ㅊ어길다 엄청 긴 상품리스티이다.
                          이것은 엄청 길기 때문에 엄청 길게 보일것이다. 왜냐하면
                          엄청 길기 때문이다. 길다길어 마치 나의 다리길이처럼
                          말이지
                        </p>
                      </div>
                      <img src={thumbnail} alt={productName} />
                    </div>
                    <div className="itemDetails">
                      <div className="itemDetailLeft">
                        <div className="productName detail">{productName}</div>
                        <div className="brandName detail">{brandName}</div>
                        <div className="color detail">{color}</div>
                      </div>
                      <div className="itemDetailRight">
                        {discountPrice !== null ? (
                          <>
                            <div className="discountRatio detail">
                              {Math.floor(
                                (1 -
                                  Number(discountPrice) / Number(retailPrice)) *
                                  100
                              )}
                              %
                            </div>
                            <div className="price detail">
                              <div className="discountPrice detail">
                                {Number(discountPrice).toLocaleString()}원
                              </div>
                              <div className="retailPrice detail">
                                {Number(retailPrice).toLocaleString()}원
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="price detail">
                            <div className="discountPrice detail">
                              {Number(retailPrice).toLocaleString()}원
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
            )
          : null}
      </div>
    </div>
  );
}

export default ContentList;
