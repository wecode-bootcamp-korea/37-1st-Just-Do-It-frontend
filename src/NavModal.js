import React from 'react';

import './NavModal.scss';

export default function NavModal({
  children,
  loginModal,
  searchModal,
  itemModal,
}) {
  const getModalClass = () => {
    if (loginModal) {
      return 'modalLoginContainer';
    }
    if (searchModal) {
      return 'modalSearchContainer';
    }
    if (itemModal) {
      return 'modalItemContainer';
    }
  };
  return <div className={getModalClass()}>{children}</div>;
}
