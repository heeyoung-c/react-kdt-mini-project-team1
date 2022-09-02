import React, { useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useGetPersonQuery } from '~/api/customApi';
import Loading from '../../components/ui/Loading';

const PrivateRoute = ({ children }) => {
  const { data: isTokenValid, isLoading, isError } = useGetPersonQuery();

  useEffect(() => console.log('토큰유효성', isTokenValid), [isTokenValid]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.log('토큰이 유효하지 않음');

    alert('로그인이 필요합니다!');
    return <Navigate to='/entry' />;
  }

  // if (isTokenValid) {
  //   return children;
  // }

  return children;
};

export default PrivateRoute;
