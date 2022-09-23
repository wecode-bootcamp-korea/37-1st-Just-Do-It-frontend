import React from 'react';
import CONTENTS_MOCK from './mockData/contentMock';
import './contentList.scss';
import AdvertiseItem from './components/AdvertiseItem';

function ContentList(props) {
  return (
    <div className="contentItems">
      <div className="contentItemContainor">
        <div className="contentItem">
          <AdvertiseItem />
        </div>
        {CONTENTS_MOCK.map(
          ({
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
              <div className="contentItem" key={styleCode}>
                <div
                  className="itemImg"
                  style={{ backgroundImage: `url(${thumbnail})` }}
                >
                  <img src={thumbnail} alt={productName} />
                </div>
                <div className="itemDetails">
                  <div className="itemDetailLeft">
                    <div className="productName detail">{productName}</div>
                    {/* <div className="description detail">{description}</div> */}
                    <div className="brandName detail">{brandName}</div>
                    <div className="color detail">{color}</div>
                  </div>
                  <div className="itemDetailRight">
                    <div className="discountRatio detail">
                      {Math.floor((1 - discountPrice / retailPrice) * 100)}%
                    </div>
                    <div className="price detail">
                      <div className="discountPrice detail">
                        {discountPrice.toLocaleString()}원
                      </div>
                      <div className="retailPrice detail">
                        {retailPrice.toLocaleString()}원
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default ContentList;
