import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ModalPortal from '../../Portal';
import NavModal from '../../NavModal';
import Login from '../Login/Login';
import SearchModal from '../SearchModal/SearchModal';
import ViewItem from '../ViewItem/ViewItem';
import './Nav.scss';

function Nav() {
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
    <>
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
      <div className="navTop">
        <div className="navTopLeft">
          <p className="navTopLeftItem">조던</p>
          <p className="navTopLeftItem">컨버스</p>
        </div>
        <div className="navTopRight">
          <Link to="/item-list" className="navTopRightItem">
            고객센터
          </Link>
          <Link to="/sign-in" className="navTopRightItem">
            멤버 가입
          </Link>
          <button className="navTopRightItem" onClick={handleToggleLogin}>
            로그인
          </button>
        </div>
      </div>
      <div className="navBottom">
        <div className="navBottomLeft">
          <Link to="/" className="navBottomLeftItem">
            나이키
          </Link>
        </div>
        <div className="navBottomCenter" onMouseEnter={handleToggleItem}>
          <Link to="/item-list" className="navBottomCenterItem">
            New Releases
          </Link>
          <Link to="/item-list" className="navBottomCenterItem">
            Men
          </Link>
          <Link to="/item-list" className="navBottomCenterItem">
            Women
          </Link>
          <Link to="/item-list" className="navBottomCenterItem">
            Kids
          </Link>
          <Link to="/item-list" className="navBottomCenterItem">
            Sale
          </Link>
        </div>
        <div className="navBottomRight">
          <div className="navBottomRightSearch">
            <i className="fa-solid fa-magnifying-glass navBottomRightSearchIcon" />
          </div>
          <div className="navBottomRightInput">
            <input
              onClick={handleToggleSearch}
              type="text"
              placeholder="검색"
              className="navBottomRightInputBar"
            />
          </div>
          <div className="navBottomRightIcon">
            <Link to="#">
              <i className="fa-regular fa-heart navBottomRightItem" />
            </Link>
            <Link to="#">
              <i className="fa-solid fa-bag-shopping navBottomRightItem" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
