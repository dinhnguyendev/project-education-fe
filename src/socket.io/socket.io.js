import Cookies from "universal-cookie";
import io from "socket.io-client";
import { DOMAIN } from "./../utils/config/configSocketIO";
const cookies = new Cookies();
const token = cookies.get("accessToken") ? cookies.get("accessToken") : null;
var socket = io(DOMAIN, {
  extraHeaders: {
    token: token,
  },
});
export default socket;
