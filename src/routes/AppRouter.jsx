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

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllProducts />} />

        <Route path='sign-up' element={<SignUp />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='my-page' element={<MyPage />} />

        <Route path='custom-products' element={<CustomProducts />} />
        <Route path='all-products' element={<AllProducts />} />
        <Route path='wish-products' element={<WishProducts />} />
        <Route path='cart' element={<Cart />} />
        {/* 동적 라우팅.. 고려사항 */}
      </Routes>
    </div>
  );
};

export default AppRouter;
