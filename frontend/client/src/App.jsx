import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Product from './pages/Product';

const App = () => {
  return (
    <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Home />} /> {/* Use element prop instead of component */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
