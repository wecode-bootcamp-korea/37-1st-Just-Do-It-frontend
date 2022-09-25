import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ViewItem from './components/ViewItem/ViewItem';
// import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
// import Main from './pages/Main/Main';
import SearchModal from './components/SearchModal/SearchModal';
import ItemList from './pages/ItemsList/ItemsList';

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/view-item" element={<ViewItem />} />
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/search-modal" element={<SearchModal />} />
        <Route path="/item-list" element={<ItemList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
