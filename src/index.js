import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './styles/reset.scss';
import './styles/common.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Nav />
    <Router />
    <Footer />
  </>
);
