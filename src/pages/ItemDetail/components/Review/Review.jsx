import React from 'react';
import './Review.scss';
function Review({ product, reviewOpen, styleCode }) {
  return (
    <div>
      {!reviewOpen && (
        <div>
          <div>별점</div>
          <div className="reviewBox">
            <div>박영태</div>
            <div>2022.09.26</div>
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
