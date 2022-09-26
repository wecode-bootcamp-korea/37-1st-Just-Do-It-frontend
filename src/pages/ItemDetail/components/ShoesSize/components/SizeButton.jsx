import React, { useState } from 'react';

function SizeButton({ data, setShooseSize }) {
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
      />
      <label htmlFor={size}>{data.size}</label>
    </li>
  );
}

export default SizeButton;
