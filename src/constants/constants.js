export const ROUTER = {
  AUTHORIZATION: "/",
  HOME: "",
  LOGIN: "login",
  REGISTER: "register",
  AUTHENTICATION: "/auth",
  GAME: "/games",
  GAMECARO: "caro",
  START: "start",
  PLAYCARO: "play/:id",
  NOTFOUND: "*",
};

export const CONFIG_GFAMES = {
  QUANTITY_SQUARES: 50,
};
export const LINKTO = {
  STARTCARO: "/games/caro/start",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  HOME: "/",
  PLAYCARO: "/games/caro/play",
};
export const API = {
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  GETBYID: "/auth/get",
};
export const KEY = {
  LOOUT: "logout",
};
export const NOTIFICATION = {
  TIMER__END: ["warning", "Tiếc thật! Bạn đã mất lượt chơi", "Bạn chỉ có 60s để suy nghỉ thôi nhá"],
  TIMER__START: [
    "success",
    "Chúc mừng bạn! Bạn được đánh tiếp",
    "Bạn được đánh tiếp do đối thủ hết thời gian",
  ],
};
