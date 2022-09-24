import React from 'react';
import FilterBarCheckList from './components/FilterBarCheckList/FilterBarCheckList';
import FilterBarColor from './components/FilterBarColor/FilterBarColor';
import FilterBarSize from './components/FilterBarSize/FilterBarSize';

import FILTER_BAR_CHECKLIST from './components/FilterBarCheckList/constantData/filterBarItems';

import './filterBar.scss';

function FilterBar({ selectedSize, setSelectedSize, filterHider }) {
  return (
    <div
      className="filterBar"
      style={
        filterHider !== true ? { width: 0, minWidth: 0, opacity: 0 } : null
      }
    >
      <FilterBarSize
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
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
    </div>
  );
}

export default FilterBar;
