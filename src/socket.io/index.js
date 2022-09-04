import { useSelector } from "react-redux";
import socket from "./socket.io";

socket.on("server--join--rooms", (idRooms) => {
  if (idRooms) {
    console.log("id");
    console.log(idRooms);
    socket.emit("client--leave-room-caro", idRooms);
  }
});
socket.on("server--handle--error", (data) => {
  alert(data);
});
