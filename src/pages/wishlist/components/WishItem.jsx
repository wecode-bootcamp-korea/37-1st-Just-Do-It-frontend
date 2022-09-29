import React from 'react';
import { Link } from 'react-router-dom';
import { WISH_DATA } from '../../../config';

function WishItem({ productId, thumbnail, name, price, userId, setAddWish }) {
  const handleDeleteCheck = async () => {
    try {
      // const token = localStorage.getItem('token');
      if (window.confirm('삭제 하시겠습니까?')) {
        await fetch(`${WISH_DATA}/${productId}`, {
          method: 'DELETE',
          headers: {
            authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlhdCI6MTY2NDM3MTk2NywiZXhwIjoxNjY1MTQ5NTY3fQ.DSE-pDdhK80473DQzO1_faMAPqYmwo-E4rNkFqeX_2Q',
          },
        });

        await fetch(`${WISH_DATA}`, {
          method: 'GET',
          headers: {
            authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImlhdCI6MTY2NDM3MTk2NywiZXhwIjoxNjY1MTQ5NTY3fQ.DSE-pDdhK80473DQzO1_faMAPqYmwo-E4rNkFqeX_2Q',
          },
        })
          .then(response => response.json())
          .then(data => setAddWish(data));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div key={productId} className="wishItem">
      <button
        className="deleteButton"
        onClick={handleDeleteCheck}
        title={productId}
      >
        <i className="fa-solid fa-x deleteIcon" />
      </button>
      <div>
        <img src={thumbnail} alt="위시리스트사진" className="wishImg" />
        <p className="wishName">{name}</p>
        <p className="wishPrice">{price}원</p>
        <Link to="/item-list" className="wishMove">
          장바구니담기
        </Link>
      </div>
    </div>
  );
}

export default WishItem;
