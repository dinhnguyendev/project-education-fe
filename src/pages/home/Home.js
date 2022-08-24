import React, { useEffect, useState } from 'react';
import Cards from '../../components/card/Cards';
import Gird from '../../components/gird/Gird';
import GameCaro from '../gameCaro/GameCaro';
import socket from './../../socket.io/socket.io';
import ContainerHome from './../../components/container/ContainerHome';

const Home = () => {
  return (
    <div className="home">
      <ContainerHome />
      <Gird />
    </div>
  );
};

export default Home;
