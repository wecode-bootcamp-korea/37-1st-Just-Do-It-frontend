import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Main from './pages/Main/Main';
import ItemList from './pages/ItemsList/ItemsList';
// import Nav from './components/Nav/Nav';
// import Footer from './components/Footer/Footer';
// import SignUp from './pages/SignUp/SignUp.jsx';
import WishList from './pages/wishlist/WishList';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import './styles/reset.scss';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/wish-list" element={<WishList />} />
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        <Route path="/item-list" element={<ItemList />} />
        <Route path="/item-detail" element={<ItemDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
