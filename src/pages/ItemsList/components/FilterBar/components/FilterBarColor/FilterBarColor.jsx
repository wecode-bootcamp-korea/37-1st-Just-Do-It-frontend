import React from 'react';
import Color from './components/Color';

function FilterBarColor(props) {
  const colors = [
    { name: '베이지', code: '#eee58b' },
    { name: '검정색', code: '#000000' },
    { name: '파랑색', code: '#3686d5' },
    { name: '갈색', code: '#765439' },
    { name: '금색', code: '#d4d600' },
    { name: '회색', code: '#737373' },
    { name: '녹색', code: '#089300' },
    { name: '쑥색', code: '#7e7f00' },
    { name: '남색', code: '#3b4a75' },
    { name: '주황색', code: '#ea621e' },
    { name: '분홍색', code: '#ea0189' },
    { name: '보라색', code: '#693bb0' },
  ];
  return (
    <div className="filterColor">
      <div className="colorHeader">
        <div className="colorText">색상</div>
        <img className="colorIcon" src="./image/itemList/upArrow.png" />
      </div>
      <div className="colors">
        {colors.map(color => {
          return <Color name={color.name} key={color.code} code={color.code} />;
        })}
      </div>
    </div>
  );
}

export default FilterBarColor;
