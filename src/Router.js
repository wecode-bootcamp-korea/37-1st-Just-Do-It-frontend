import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import ItemList from './pages/ItemsList/ItemsList';
import SignIn from './pages/SignIn/SignIn';
import Login from './components/Login/Login';
import SearchModal from './components/SearchModal/SearchModal';
import ViewItem from './components/ViewItem/ViewItem';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item-list" element={<ItemList />} />
        <Route path="/search-modal" element={<SearchModal />} />
        <Route path="/view-item" element={<ViewItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
