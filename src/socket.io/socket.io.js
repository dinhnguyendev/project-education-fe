import io from 'socket.io-client';
import { DOMAIN } from './../utils/config/configSocketIO';
var socket = io(DOMAIN);
export default socket;
