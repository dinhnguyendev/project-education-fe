import { useSelector } from "react-redux";
import socket from "./socket.io";

socket.on("server--join--rooms", (data) => {
  if (data.idRooms) {
    console.log("id");
    console.log(data.idRooms);
    socket.emit("client--leave-room-caro", data);
  }
});
socket.on("server--handle--error", (data) => {
  alert(data);
});
