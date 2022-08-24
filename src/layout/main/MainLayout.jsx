import React from 'react';
import { Outlet } from 'react-router';
import './mainLayout.css';
import Header from './../../components/header/Header';
const MainLayout = () => {
  return (
    <div className='body'>
      <Header />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
