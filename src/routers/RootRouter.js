import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from '../components/loadingPage/LoadingPage';
import { ROUTER } from '../constants/constants';
import Home from '../pages/home/Home';
import socket from './../socket.io/socket.io';
import Login from './../pages/login/Login';
import Register from './../pages/register/Register';
import Authentication from '../layout/auth/Authentication';
import Authorization from './Authorization';
const RootRouter = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTER.HOME} element={<Home />} />
          <Route path={ROUTER.AUTHORIZATION} element={<Authorization />}></Route>
          <Route path={ROUTER.AUTHENTICATION} element={<Authentication />}>
            <Route path={ROUTER.LOGIN} element={<Login />} />
            <Route path={ROUTER.REGISTER} element={<Register />} />
          </Route>
          <Route path={ROUTER.NOTFOUND} element={'not found'} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RootRouter;
