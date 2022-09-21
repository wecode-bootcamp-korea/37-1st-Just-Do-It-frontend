import React from 'react';
import FilterBarCheckList from './components/FilterBarCheckList/FilterBarCheckList';
import FilterBarColor from './components/FilterBarColor/FilterBarColor';
import FilterBarSize from './components/FilterBarSize/FilterBarSize';

import FILTER_BAR_CHECKLIST from './components/FilterBarCheckList/constantData/filterBarItems';

import './filterBar.scss';

function FilterBar({ sizeSelector }) {
  return (
    <div className="filterBar">
      <FilterBarSize sizeSelector={sizeSelector} />
      <FilterBarColor />
      {FILTER_BAR_CHECKLIST.map(list => {
        return (
          <FilterBarCheckList
            category={list.category}
            listArr={list.listArr}
            key={list.category}
          />
        );
      })}
      {/* <FilterBarCheckList /> */}
      {/* <FilterBarCheckList
        category="브랜드"
        listArr={['ACG', 'NikeLab', '나이키 스포츠웨어', '조던']}
      />
      <FilterBarCheckList
        category="아이콘"
        listArr={[
          '에어 포스 1',
          '나이키 에어맥스',
          '인피니티 런',
          '블레이저',
          '나이키 덩크',
        ]}
      />

      <FilterBarCheckList
        category="에어맥스"
        listArr={[
          '에어맥스 1',
          '에어맥스 90',
          '에어맥스 95',
          '에어맥스 97',
          '에어맥스 270',
        ]}
      />
      <FilterBarCheckList category="발볼" listArr={['보통', '넓음']} />
      <FilterBarCheckList category="착용감" listArr={['안정감', '편안함']} />
      <FilterBarCheckList
        category="용도"
        listArr={['최상의 스피드', '레이싱', '습한 날씨']}
      />
      <FilterBarCheckList category="기능성" listArr={['방수', '지지력']} />
      <FilterBarCheckList
        category="영감받은 선수"
        listArr={[
          '르브론 제임스',
          '케빈 듀란트',
          '카이리 어빙',
          '러셀 웨스트브룩',
          '그랜트 테일러',
        ]}
      />
      <FilterBarCheckList
        category="지면"
        listArr={['로드 러닝', '트레일 러닝', '하드 코트']}
      />
      <FilterBarCheckList
        category="신발높이"
        listArr={['3/4탑', '하이탑', '로우탑']}
      />
      <FilterBarCheckList
        category="클로저 타입"
        listArr={['슬립온', '벨크로']}
      />
      <FilterBarCheckList
        category="성별"
        listArr={['여성', '남성', '성인공용']}
      /> */}
    </div>
  );
}

export default FilterBar;
