import React from 'react';
import Login from './components/Login/Login';
import './Modal.scss';

export default function Modal() {
  return (
    <div className="modalContainer">
      <div className="modal">
        <Login />
      </div>
    </div>
  );
}
