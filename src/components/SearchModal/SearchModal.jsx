import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEARCH_CONFIG } from '../../config';
// import { SEARCH_MODAL_DATA } from './SEARCH_MODAL_DATA';
import './SearchModal.scss';
import { useEffect } from 'react';

function SearchModal({ closeTargetModal }) {
  const [comment, setComment] = useState('');
  const [recentHistoryList, setRecentHistoryList] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [recommendationsForView, setRecommendationsForView] = useState([]);
  const [test, setTest] = useState([]);

  useEffect(() => {
    fetch(`${SEARCH_CONFIG}`)
      .then(response => response.json())
      .then(result => setTest(result.list));
  }, []);

  useEffect(() => {
    setRecommendationsForView(test);
    setRecommendations(test);
  }, [comment]);

  useEffect(() => {
    const localStorageItem = localStorage.getItem('recentHistory');
    if (!localStorageItem) {
      return;
    }

    try {
      setRecentHistoryList(
        localStorageItem ? JSON.parse(localStorageItem) : []
      );
    } catch (e) {
      console.error(e);
      localStorage.setItem('recentHistory', '[]');
    }
  }, []);

  const inputComment = e => {
    const currentComment = e.target.value;
    const filteredRecommendations = recommendations.filter(({ productName }) =>
      productName.includes(currentComment)
    );

    setRecommendationsForView(filteredRecommendations);
    setComment(e.target.value);
  };

  const inputKeyUp = e => {
    if (e.key !== 'Enter') {
      return;
    }

    const inputComment = e.target.value;

    if (!inputComment.length) {
      return;
    }

    const localStorageItem = localStorage.getItem('recentHistory');
    try {
      const recentHistory = localStorageItem
        ? JSON.parse(localStorageItem)
        : [];

      const updated = [...recentHistory, inputComment];
      localStorage.setItem('recentHistory', JSON.stringify(updated));

      setRecentHistoryList(updated);
      setComment('');
    } catch (e) {
      console.error(e);
      localStorage.setItem('recentHistory', '[]');
    }
  };

  const handleRemoveHistory = historyComment => {
    const filtered = recentHistoryList.filter(
      recentHistory => recentHistory !== historyComment
    );

    localStorage.setItem('recentHistory', JSON.stringify(filtered));
    setRecentHistoryList(filtered);
  };

  const handleCloseModal = () => closeTargetModal('search');

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
          {recentHistoryList.map((value, idx) => {
            return (
              <div key={idx} className="recommend">
                <Link to="/item-list" className="recommends">
                  {value}
                </Link>
                <button
                  className="delateRecommend"
                  onClick={() => handleRemoveHistory(value)}
                >
                  <i className="fa-solid fa-x delateRecommendIcon" />
                </button>
              </div>
            );
          })}
          {!!recommendationsForView.length ? (
            <div className="recommendationContainer">
              <p className="recommendTitle">추천 검색어</p>
              {recommendationsForView.map(({ productName, id }) => {
                return (
                  <div key={id} className="recommendationItem">
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
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
