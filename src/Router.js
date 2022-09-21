import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import ViewItem from './components/ViewItem/ViewItem';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/view-item" element={<ViewItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
