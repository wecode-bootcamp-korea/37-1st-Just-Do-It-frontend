import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { SEARCH_CONFIG } from '../../config';
import { SEARCH_MODAL_DATA } from './SEARCH_MODAL_DATA';
import './SearchModal.scss';

function SearchModal({ closeTargetModal }) {
  const [comment, setComment] = useState('');

  const inputComment = event => {
    setComment(event.target.value);
  };

  const [commentList, setCommentList] = useState([]);

  // const addInputComment = e => {
  //   e.preventDefault();
  //   setId(prev => prev + 1);
  //   setCommentList([...commentList, { id: id, content: comment }]);
  //   commentList('');
  // };
  // const [comment, setComment] = useState('');

  // const inputComment = e => {
  //   setComment(e.target.value);
  // };

  // const [commentList, setCommentList] = useState([]);

  const inputKeyUp = e => {
    if (e.key !== 'Enter') {
      return;
    }

    const inputComment = e.target.value;

    if (!inputComment.length) {
      return;
    }

    setCommentList(prev => [...prev, inputComment]);
    setComment('');
  };
  const deleteChat = e => {
    e.target.parentNode.remove();
  };
  const handleCloseModal = () => closeTargetModal('search');

  // const [searchList, setSearchList] = useState([]);

  // useEffect(() => {
  //   fetch(`${SEARCH_CONFIG.api}`)
  //     .then(response => response.json())
  //     .then(({ list }) => setSearchList(list))
  //     .catch(error => console.log(error));
  // }, []);

  return (
    <div className="searchModalWrapper" onClick={() => handleCloseModal()}>
      <div className="searchModal" onClick={e => e.stopPropagation()}>
        <div className="header">
          <div>
            <Link to="/" className="headerLeft">
              JUST-DO-IT
            </Link>
          </div>
          <div className="headerCenter">
            <i className="fa-solid fa-magnifying-glass headerCenterIcon" />
            <input
              type="text"
              placeholder="검색"
              className="headerCenterInput"
              value={comment}
              onChange={inputComment}
              onKeyPress={inputKeyUp}
            />
          </div>
          <div className="headerRight">
            <button className="delateModal" onClick={() => handleCloseModal()}>
              <i className="fa-solid fa-x headerRightIcon" />
            </button>
          </div>
        </div>
        <div className="recommendContainer">
          <p className="recommendTitle">최근 검색어</p>
          {commentList.map((value, idx) => {
            return (
              <div key={idx}>
                <Link to="/item-list" className="recommendName">
                  {value}
                </Link>
                <button className="delateRecommend" onCLick={deleteChat}>
                  <i className="fa-solid fa-x delateRecommendIcon" />
                </button>
              </div>
            );
          })}
          <p className="recommendTitle">추천 검색어</p>
          {SEARCH_MODAL_DATA.map(({ productName, productId }) => {
            return (
              <div key={productId} className="recommendationItem">
                <Link
                  to="/item-list"
                  className="recommendationName recommendName"
                >
                  {productName}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
