import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Adjust paths based on your folder structure
import Product from './Product'; // Adjust paths based on your folder structure

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/products" element={<Product />} />
    </Routes>
  </BrowserRouter>
);

export default App; // Export App as the default export
