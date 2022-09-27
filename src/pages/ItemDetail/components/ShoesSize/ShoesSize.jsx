import React from 'react';
import SizeButton from './components/SizeButton';
import './ShoesSize.scss';

function ShoesSize({ footSize, setShooseSize }) {
  return (
    <div>
      <ul className="shoesSizeWrap">
        {footSize?.map(data => (
          <SizeButton
            data={data}
            key={data.productOptionId}
            setShooseSize={setShooseSize}
            itemstock={data.stock}
          />
        ))}
        {/* <li>
          <button className="shoesSizeNum">250</button>
        </li>
        <li>
          <button className="shoesSizeNum">250</button>
        </li>
        <li>
          <button className="shoesSizeNum">255</button>
        </li>
        <li>
          <button className="shoesSizeNum">260</button>
        </li>
        <li>
          <button className="shoesSizeNum">265</button>
        </li>
        <li>
          <button className="shoesSizeNum">270</button>
        </li>
        <li>
          <button className="shoesSizeNum">275</button>
        </li>
        <li>
          <button className="shoesSizeNum">280</button>
        </li>
        <li>
          <button className="shoesSizeNum">285</button>
        </li>
        <li>
          <button className="shoesSizeNum">290</button>
        </li>
        <li>
          <button className="shoesSizeNum">295</button>
        </li>
        <li>
          <button className="shoesSizeNum">300</button>
        </li>
        <li>
          <button className="shoesSizeNum">305</button>
        </li>
        <li>
          <button className="shoesSizeNum">310</button>
        </li> */}
      </ul>
    </div>
  );
}

export default ShoesSize;
