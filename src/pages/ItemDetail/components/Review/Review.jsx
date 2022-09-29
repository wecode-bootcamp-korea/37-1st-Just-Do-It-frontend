import React from 'react';

import './Review.scss';
function Review({ review, styleCode }) {
  return (
    <div>
      {review?.map(item => (
        <div key={item.id}>
          {/* <div>
          {Array(item.starScore)
          .fill()
          .map(_, i) => {<p>★</p>}}
          </div> */}
          <div className="reviewBox">
            <div>{item.fullName}</div>
            <div>{item.createdAt}</div>
            <div>{styleCode}</div>
          </div>
          {item.content}
          <div />
        </div>
      ))}
    </div>
  );
}

export default Review;
