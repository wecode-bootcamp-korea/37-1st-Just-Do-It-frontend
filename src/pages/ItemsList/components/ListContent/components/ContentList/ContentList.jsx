import React from 'react';
import CONTENTS_MOCK from './mockData/contentMock';
import './contentList.scss';

function ContentList(props) {
  return (
    <div className="contentItems">
      {CONTENTS_MOCK.map(content => {
        return (
          <div className="contentItem" key={Math.random()}>
            <div className="itemImg">
              <img src={content.img} />
            </div>
            <div className="itemDetails">
              <div className="itemDetailLeft">
                <div className="itemName detail">{content.itemName}</div>
                <div className="dragon detail">{content.dragon}</div>
                <div className="type detail">{content.type}</div>
                <div className="colors detail">{content.colors}</div>
              </div>
              <div className="itemDetailRight">
                <div className="discountRatio detail">
                  {Math.floor(
                    (1 - content.discountPrice / content.originalPrice) * 100
                  )}
                  %
                </div>
                <div className="price detail">
                  <div className="discountPrice detail">
                    {content.discountPrice.toLocaleString()}원
                  </div>
                  <div className="originalPrice detail">
                    {content.originalPrice.toLocaleString()}원
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="contentItem">
        <div className="itemImg">
          <img src="./image/itemList/nikeShoes.jpeg" />
        </div>
        <div className="itemDetails">
          <div className="itemDetailLeft">
            <div className="itemName detail">나이키 리액트 13</div>
            <div className="dragon detail">성인 남성 신발</div>
            <div className="type detail">운동화</div>
            <div className="colors detail">3 컬러</div>
          </div>
          <div className="itemDetailRight">
            <div className="discountRatio detail">35%</div>
            <div className="price detail">
              <div className="discountPrice detail">168,400 원</div>
              <div className="originalPrice detail">259,900 원</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contentItem">
        <div className="itemImg">
          <img src="./image/itemList/nikeShoes.jpeg" />
        </div>
        <div className="itemDetails">
          <div className="itemDetailLeft">
            <div className="itemName detail">나이키 리액트 13</div>
            <div className="dragon detail">성인 남성 신발</div>
            <div className="type detail">운동화</div>
            <div className="colors detail">3 컬러</div>
          </div>
          <div className="itemDetailRight">
            <div className="discountRatio detail">35%</div>
            <div className="price detail">
              <div className="discountPrice detail">168,400 원</div>
              <div className="originalPrice detail">259,900 원</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contentItem">
        <div className="itemImg">
          <img src="./image/itemList/nikeShoes.jpeg" />
        </div>
        <div className="itemDetails">
          <div className="itemDetailLeft">
            <div className="itemName detail">나이키 리액트 13</div>
            <div className="dragon detail">성인 남성 신발</div>
            <div className="type detail">운동화</div>
            <div className="colors detail">3 컬러</div>
          </div>
          <div className="itemDetailRight">
            <div className="discountRatio detail">35%</div>
            <div className="price detail">
              <div className="discountPrice detail">168,400 원</div>
              <div className="originalPrice detail">259,900 원</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contentItem">
        <div className="itemImg">
          <img src="./image/itemList/nikeShoes.jpeg" />
        </div>
        <div className="itemDetails">
          <div className="itemDetailLeft">
            <div className="itemName detail">나이키 리액트 13</div>
            <div className="dragon detail">성인 남성 신발</div>
            <div className="type detail">운동화</div>
            <div className="colors detail">3 컬러</div>
          </div>
          <div className="itemDetailRight">
            <div className="discountRatio detail">35%</div>
            <div className="price detail">
              <div className="discountPrice detail">168,400 원</div>
              <div className="originalPrice detail">259,900 원</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contentItem">
        <div className="itemImg">
          <img src="./image/itemList/nikeShoes.jpeg" />
        </div>
        <div className="itemDetails">
          <div className="itemDetailLeft">
            <div className="itemName detail">나이키 리액트 13</div>
            <div className="dragon detail">성인 남성 신발</div>
            <div className="type detail">운동화</div>
            <div className="colors detail">3 컬러</div>
          </div>
          <div className="itemDetailRight">
            <div className="discountRatio detail">35%</div>
            <div className="price detail">
              <div className="discountPrice detail">168,400 원</div>
              <div className="originalPrice detail">259,900 원</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contentItem">
        <div className="itemImg">
          <img src="./image/itemList/nikeShoes.jpeg" />
        </div>
        <div className="itemDetails">
          <div className="itemDetailLeft">
            <div className="itemName detail">나이키 리액트 13</div>
            <div className="dragon detail">성인 남성 신발</div>
            <div className="type detail">운동화</div>
            <div className="colors detail">3 컬러</div>
          </div>
          <div className="itemDetailRight">
            <div className="discountRatio detail">35%</div>
            <div className="price detail">
              <div className="discountPrice detail">168,400 원</div>
              <div className="originalPrice detail">259,900 원</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ContentList;
