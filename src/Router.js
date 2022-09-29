import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import LoginModal from './components/Login/LoginModal';
import ItemList from './pages/ItemsList/ItemsList';
import ModalPortal from './ModalPortal';
import SearchModal from './components/SearchModal/SearchModal';
import ViewItem from './components/ViewItem/ViewItem';
import Cart from '../src/pages/Cart/Cart';

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
      {modalState.login && (
        <ModalPortal>
          <LoginModal closeTargetModal={closeTargetModal} />
        </ModalPortal>
      )}
      {modalState.search && (
        <ModalPortal>
          <SearchModal closeTargetModal={closeTargetModal} />
        </ModalPortal>
      )}
      {modalState.viewItem && (
        <ModalPortal>
          <ViewItem closeTargetModal={closeTargetModal} />
        </ModalPortal>
      )}

      <Nav showTargetModal={showTargetModal} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/item-list" element={<ItemList />} />
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
