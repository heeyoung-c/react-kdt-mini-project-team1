import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';
import MyPage from '~/pages/MyPage';

import AllProducts from '~/pages/AllProducts';
import CustomProducts from '~/pages/CustomProducts';
import WishProducts from '~/pages/WishProducts';
import Cart from '~/pages/Cart';
import Layout from '../pages/Layout';
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<AllProducts />} />
          <Route path='custom-products' element={<CustomProducts />} />
          <Route path='all-products' element={<AllProducts />} />
          <Route path='wish-products' element={<WishProducts />} />
          <Route path='cart' element={<Cart />} />
          <Route path='my-page' element={<MyPage />} />
        </Route>

        <Route path='sign-up' element={<SignUp />} />
        <Route path='sign-in' element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
