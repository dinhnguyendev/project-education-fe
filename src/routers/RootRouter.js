import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from '../components/loadingPage/LoadingPage';
import { ROUTER } from '../constants/constants';
import Home from '../pages/home/Home';

const RootRouter = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTER.HOME} element={<Home />} />
          <Route path={ROUTER.NOTFOUND} element={'not found'} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default RootRouter;
