import React from 'react';
import { Link } from 'react-router-dom';
import {
  NEW_FEATURED_DATA,
  SHOES_DATA,
  CLOTHES_DATA,
  SPORTS_DATA,
  BRAND_DATA,
} from './ViewItemData';
import './ViewItemModal.scss';

function ViewItem({ closeTargetModal }) {
  const handleMouseLeave = () => {
    closeTargetModal('viewItem');
  };
  return (
    <div className="viewItemWrapper" onMouseLeave={handleMouseLeave}>
      <div className="viewItem">
        <div>
          {NEW_FEATURED_DATA.map((e, idx) => {
            return (
              <Link key={idx} className="defaultText" to="/item-list">
                {e.name}
              </Link>
            );
          })}
        </div>
        <div>
          {SHOES_DATA.map((e, idx) => {
            return (
              <Link key={idx} className="defaultText" to="/item-list">
                {e.name}
              </Link>
            );
          })}
        </div>
        <div className="clothesBox">
          {CLOTHES_DATA.map((e, idx) => {
            return (
              <Link key={idx} className="defaultText" to="/item-list">
                {e.name}
              </Link>
            );
          })}
        </div>
        <div>
          {SPORTS_DATA.map((e, idx) => {
            return (
              <Link key={idx} className="defaultText" to="/item-list">
                {e.name}
              </Link>
            );
          })}
        </div>
        <div>
          {BRAND_DATA.map((e, idx) => {
            return (
              <Link key={idx} className="defaultText" to="/item-list">
                {e.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ViewItem;
