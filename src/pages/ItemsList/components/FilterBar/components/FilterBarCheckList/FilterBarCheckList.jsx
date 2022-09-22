import React from 'react';
import './filterBarCheckList.scss';

function FilterBarCheckList({ category, listArr }) {
  return (
    <div className="category">
      <div className="categoryHeader">
        <div className="categoryText">{category}</div>
        <img
          className="categoryIcon"
          src="./image/itemList/upArrow.png"
          alt="메뉴펼치기"
        />
      </div>
      <div className="checkList">
        {listArr.map(list => {
          return (
            <div className="list" key={list}>
              <input type="checkbox" id={list} name={list} />
              <label htmlFor={list}>{list}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBarCheckList;
