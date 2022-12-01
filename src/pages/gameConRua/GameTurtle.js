import React, { useEffect, useRef, useState } from "react";
import GameContainer from "./components/gameContainer/GameContainer";
import TimerTurtle from "./components/timer/TimerTurtle";
import "./gameTurtle.css";
import socket from "./../../socket.io/socket.io";
import Bet from "./components/bet/Bet";
import { useSearchParams } from "react-router-dom";
import { Button } from "antd";

const GameTurtle = () => {
  const [idRooms, setIdRooms] = useState("");
  const [disable, setDisable] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams("");
  let rooms = useRef();

  useEffect(() => {
    socket.emit("join--room-turtle");
    socket.on("server--join--room-uid", (data) => {
      rooms.current = data;
      setSearchParams({ idRooms: data });
    });
    return () => {
      socket.emit("client--leave--room--by-id", rooms.current);
    };
  }, []);

  useEffect(() => {
    socket.on("server--turtle--idrooms", (data) => {
      console.log("disable");
      setDisable(data);
    });
  }, []);

  return (
    <div className="turtle__big">
      <div className="game__turtle__box">
        <div className="game__turtle game__turtle__brg">
          <Button
            onClick={() =>
              socket.emit("turtle--token--winner", {
                idRooms: "ff983a35-8efc-43ba-9010-23a0a4eac63e",
                WIN_I: 1,
              })
            }
          >
            handle
          </Button>
          <TimerTurtle />
          <GameContainer />
        </div>
      </div>
      <Bet disable={disable} idRooms={idRooms} />
    </div>
  );
};

export default GameTurtle;
