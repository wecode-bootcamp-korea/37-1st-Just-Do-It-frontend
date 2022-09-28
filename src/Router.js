import React, { useState } from 'react';
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

function Router() {
  const [modalState, setModalState] = useState({
    login: false,
    search: false,
    viewItem: false,
  });

  const showTargetModal = modalName => {
    if (!['login', 'search', 'viewItem'].includes(modalName)) {
      return;
    }

    setModalState(prev => ({
      ...prev,
      [modalName]: true,
    }));
  };

  const closeTargetModal = modalName => {
    if (!['login', 'search', 'viewItem'].includes(modalName)) {
      return;
    }

    setModalState(prev => ({
      ...prev,
      [modalName]: false,
    }));
  };

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
