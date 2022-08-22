import React, { useEffect, useState } from 'react';
import Cards from '../../components/card/Cards';
import Gird from '../../components/gird/Gird';
import Header from '../../components/header/Header';
import GameCaro from '../gameCaro/GameCaro';
import socket from './../../socket.io/socket.io';
import './home.css';
const Home = () => {
  return (
    <div className='home'>
      <Header />
     <Gird/>
      <GameCaro />
    </div>
  );
};

export default Home;
