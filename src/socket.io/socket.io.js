import Cookies from "universal-cookie";
import io from "socket.io-client";
import { DOMAIN } from "./../utils/config/configSocketIO";
const cookies = new Cookies();
const token = cookies.get("accessToken") ? cookies.get("accessToken") : "";
var socket = io.connect(DOMAIN, {
  extraHeaders: {
    token: token,
  },
  reconnection: true,
  reconnectionDelay: 500,
  reconnectionDelayMax: 1000,
  reconnectionAttempts: 50,
});

export default socket;
