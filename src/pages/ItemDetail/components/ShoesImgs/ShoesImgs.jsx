import React from 'react';
import './ShoesImgs.scss';
function ShoesImgs({ imageUrl }) {
  return (
    <ul className="ShoesImgs">
      {imageUrl?.map(e => (
        <li className="shoesProduct" key={e.product_id}>
          <div className="ShoesImgBox">
            <img src={e.imageUrl} alt="나이키" className="shoesBigImg" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ShoesImgs;
