import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import SearchModal from './components/SearchModal/SearchModal';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search-modal" element={<SearchModal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
