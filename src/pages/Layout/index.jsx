import React from 'react';
import { Outlet } from 'react-router-dom';
import TheFooter from '~/components/layout/TheFooter';
import TheHeader from '~/components/layout/TheHeader';

const Layout = () => {
  return (
    <div>
      <TheHeader />
      <Outlet />
      <TheFooter />
    </div>
  );
};

export default Layout;
