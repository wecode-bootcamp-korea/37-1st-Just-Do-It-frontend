import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ViewItem from './components/ViewItem/ViewItem';
// import Nav from './components/Nav/Nav';
// import Footer from './components/Footer/Footer';
// import Main from './pages/Main/Main';
import ItemList from './pages/ItemsList/ItemsList';
import SignIn from './pages/SignIn/SignIn';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/view-item" element={<ViewItem />} />
        <Route path="/signin" element={<SignIn />} />

        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/itemList" element={<ItemList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
