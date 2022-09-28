import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ItemList from './pages/ItemsList/ItemsList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/item-list" element={<ItemList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
