import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import GameCaro from '../gameCaro/GameCaro';
import socket from './../../socket.io/socket.io';

const Home = () => {
  
  return (
    <div>
      <Header />
      <GameCaro />
    </div>
  );
};

export default Home;
