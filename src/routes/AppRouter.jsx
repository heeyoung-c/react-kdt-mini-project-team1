import React from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import AllProducts from '~/pages/AllProducts';
import CustomProducts from '~/pages/CustomProducts';
import WishProducts from '~/pages/WishProducts';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {/* 기본으로 보여줄 페이지는 뭐로 할까요?*/}
        <Route path='/' element={<AllProducts />} />

        <Route path='custom-products' element={<CustomProducts />} />
        <Route path='all-products' element={<AllProducts />} />
        <Route path='wish-products' element={<WishProducts />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
