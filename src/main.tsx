import CategoryContainer from './category';
import NotFoundPage from './components/notfound';
import ProductsContainer from './products';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/products' element={<ProductsContainer />} />
        <Route path='/categories' element={<CategoryContainer />} />
        <Route path='/category/:categoryId' element={<ProductsContainer />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
