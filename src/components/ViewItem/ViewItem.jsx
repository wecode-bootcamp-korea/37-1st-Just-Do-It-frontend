import React from 'react';
import { Link } from 'react-router-dom';
import './ViewItem.scss';

function ViewItem() {
  return (
    <div className="ViewItemWrapper">
      <div>
        <Link className="blockTitle" to="/item-list">
          New & Featured
        </Link>
        <Link className="block" to="/item-list">
          신상품 전체보기
        </Link>
        <Link className="block" to="/item-list">
          SNKRS
        </Link>
        <Link className="block" to="/item-list">
          나이키 덩크
        </Link>
        <Link className="block" to="/item-list">
          ACG
        </Link>
      </div>
      <div>
        <Link className="blockTitle" to="/item-list">
          New & Featured
        </Link>
        <Link className="block" to="/item-list">
          신상품 전체보기
        </Link>
        <Link className="block" to="/item-list">
          SNKRS
        </Link>
        <Link className="block" to="/item-list">
          나이키 덩크
        </Link>
        <Link className="block" to="/item-list">
          ACG
        </Link>
      </div>
      <div>
        <Link className="blockTitle" to="/item-list">
          New For Men
        </Link>
        <Link className="block" to="/item-list">
          신상품 전체보기
        </Link>
        <Link className="block" to="/item-list">
          SNKRS
        </Link>
        <Link className="block" to="/item-list">
          나이키 덩크
        </Link>
        <Link className="block" to="/item-list">
          ACG
        </Link>
      </div>
      <div>
        <Link className="blockTitle" to="/item-list">
          New For Women
        </Link>
        <Link className="block" to="/item-list">
          신상품 전체보기
        </Link>
        <Link className="block" to="/item-list">
          SNKRS
        </Link>
        <Link className="block" to="/item-list">
          나이키 덩크
        </Link>
        <Link className="block" to="/item-list">
          ACG
        </Link>
      </div>
      <div>
        <Link className="blockTitle" to="/item-list">
          New For Kids
        </Link>
        <Link className="block" to="/item-list">
          신상품 전체보기
        </Link>
        <Link className="block" to="/item-list">
          SNKRS
        </Link>
        <Link className="block" to="/item-list">
          나이키 덩크
        </Link>
        <Link className="block" to="/item-list">
          ACG
        </Link>
      </div>
      <div>
        <Link className="blockTitle" to="/item-list">
          Sale
        </Link>
        <Link className="block" to="/item-list">
          신상품 전체보기
        </Link>
        <Link className="block" to="/item-list">
          SNKRS
        </Link>
        <Link className="block" to="/item-list">
          나이키 덩크
        </Link>
        <Link className="block" to="/item-list">
          ACG
        </Link>
      </div>
    </div>
  );
}

export default ViewItem;
