import React from 'react';

function ShoesColor({ getThumbnail }) {
  return (
    <ul className="detailImgs">
      {getThumbnail?.map(e => (
        <li className="shoesColor" key={e.id}>
          <button>
            <img src={e.thumbnail} alt="나이키" className="shoesColorImg" />
          </button>
        </li>
      ))}

      {/* <li className="detailProduct">
        <div className="detailImg">
          <img src="/image/nikeshoes.png" alt="나이키" className="shoesImg" />
        </div>
      </li> */}
      {/* <li className="detailProduct">
        <div className="detailImg">
          <img src="/image/nikeshoes.png" alt="나이키" className="shoesImg" />
        </div>
      </li>
      <li className="detailProduct">
        <div className="detailImg">
          <img src="/image/nikeshoes.png" alt="나이키" className="shoesImg" />
        </div>
      </li>
      <li className="detailProduct">
        <div className="detailImg">
          <img src="/image/nikeshoes.png" alt="나이키" className="shoesImg" />
        </div>
      </li>
      <li className="detailProduct">
        <div className="detailImg">
          <img src="/image/nikeshoes.png" alt="나이키" className="shoesImg" />
        </div>
      </li>
      <li className="detailProduct">
        <div className="detailImg">
          <img src="/image/nikeshoes.png" alt="나이키" className="shoesImg" />
        </div>
      </li> */}
    </ul>
  );
}

export default ShoesColor;
