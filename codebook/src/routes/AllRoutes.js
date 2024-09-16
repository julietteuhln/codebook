import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { ProductsList } from '../pages/Products/ProductsList.js';
import { ProductDetail } from '../pages/ProductDetail.js';
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';
import { PageNotFound } from '../pages/PageNotFound.js';
import { DashboardPage } from '../pages/Dashboard/DashboardPage.js';
import { OrderPage } from '../pages/Order/OrderPage.js';
import { ProtectedRoute } from './ProtectedRoute.js';
import { Cart } from '../pages/Cart/Cart.js';


export default function AllRoutes() {
  return (
    <>
      <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsList />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<PageNotFound />} /> 
          
          <Route path='/dashboard' element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path='/order-summary' element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
          <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
           
        </Routes>
      </>
  )
}
