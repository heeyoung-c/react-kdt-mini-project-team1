import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// pages
import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';
import MyPage from '~/pages/MyPage';

import AllProducts from '~/pages/AllProducts';
import CustomProducts from '~/pages/CustomProducts';
import WishProducts from '~/pages/WishProducts';
import Cart from '~/pages/Cart';
import Layout from '../pages/Layout';
import Entry from '../pages/Entry/Index';
import PrivateRoute from './PrivateRoute';
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <AllProducts />
              </PrivateRoute>
            }
          />
          <Route
            path='custom-products'
            element={
              <PrivateRoute>
                <CustomProducts />
              </PrivateRoute>
            }
          />

          <Route
            path='wish-products'
            element={
              <PrivateRoute>
                <WishProducts />
              </PrivateRoute>
            }
          />
          <Route
            path='cart'
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path='my-page'
            element={
              <PrivateRoute>
                <MyPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path='entry' element={<Entry />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='sign-in' element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
