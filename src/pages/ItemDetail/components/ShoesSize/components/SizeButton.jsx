import React, { useState } from 'react';
import './SizeButton.scss';
function SizeButton({ data, setShooseSize, itemstock }) {
  const { size } = data;
  const [button, setButton] = useState(false);

  const pushButton = e => {
    setShooseSize(e.target.id);

    setButton(!button);
  };

  return (
    <li key={data.productOptionId}>
      <input
        name="shoesSize"
        type="radio"
        className="sizeButton"
        onClick={pushButton}
        id={size}
        disabled={itemstock === 0}
      />
      <label htmlFor={size}>{data.size}</label>
    </li>
  );
}

export default SizeButton;
