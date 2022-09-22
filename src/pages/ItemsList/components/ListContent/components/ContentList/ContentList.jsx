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
        {products.length !== undefined
          ? products.map(
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
                      style={{ backgroundImage: `url(${thumbnail})` }}
                    >
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
