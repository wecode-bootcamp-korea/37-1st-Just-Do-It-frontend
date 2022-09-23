import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewItem from './components/ViewItem/ViewItem';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/view-item" element={<ViewItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
