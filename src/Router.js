import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
// import Main from './pages/Main/Main';
import ItemList from './pages/ItemsList/ItemsList';
// import SignIn from './pages/SignIn/SignIn';
// import Login from './components/Login/Login';
// import SearchModal from './components/SearchModal/SearchModal';
import ViewItem from './components/ViewItem/ViewItem';

import ModalPortal from './Portal';
import NavModal from './NavModal';

function Router() {
  const [loginModal, setLoginModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [itemModal, setItemModal] = useState(false);

  const handleToggleLogin = () => {
    setLoginModal(prev => !prev);
  };
  const handleToggleSearch = () => {
    setSearchModal(prev => !prev);
  };
  const handleToggleItem = () => {
    setItemModal(prev => !prev);
  };

  const isModalOpen = loginModal || searchModal || itemModal;
  const getCurrentModal = () => {
    if (loginModal) {
      return <Login handleToggleLogin={handleToggleLogin} />;
    }

    if (searchModal) {
      return <SearchModal handleToggleSearch={handleToggleSearch} />;
    }

    if (itemModal) {
      return <ViewItem />;
    }

    return null;
  };

  return (
    <BrowserRouter>
      {isModalOpen && (
        <ModalPortal>
          <NavModal
            loginModal={loginModal}
            searchModal={searchModal}
            itemModal={itemModal}
          >
            {getCurrentModal()}
          </NavModal>
        </ModalPortal>
      )}
      <Nav
        handleToggleLogin={handleToggleLogin}
        handleToggleSearch={handleToggleSearch}
        handleToggleItem={handleToggleItem}
      />
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
