import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import ItemList from './pages/ItemsList/ItemsList';
import SignIn from './pages/SignIn/SignIn';
import LoginModal from './components/Login/LoginModal';
import SearchModal from './components/SearchModal/SearchModal';
import ViewItemModal from './components/ViewItem/ViewItemModal';

import ModalPortal from './Portal';

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
          <ViewItemModal closeTargetModal={closeTargetModal} />
        </ModalPortal>
      )}

      <Nav showTargetModal={showTargetModal} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/item-list" element={<ItemList />} />
        <Route path="/view" element={<viewItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
