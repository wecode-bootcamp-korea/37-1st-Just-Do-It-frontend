import React from 'react';
import './Review.scss';
function Review({ product, reviewOpen, styleCode }) {
  return (
    <div>
      {!reviewOpen && (
        <div>
          <div>별점</div>
          <div className="reviewBox">
            <div>{product.fullName}</div>
            <div>{product.createdAt}</div>
            <div>{styleCode.styleCode}</div>
          </div>
          {product.content}
          <div />
        </div>
      )}
    </div>
  );
}

export default Review;
