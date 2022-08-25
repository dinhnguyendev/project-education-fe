import { Menu } from "antd";
export const ROUTER = {
  AUTHORIZATION: "/",
  HOME: "",
  LOGIN: "login",
  REGISTER: "register",
  AUTHENTICATION: "/auth",
  GAME: "/games",
  GAMECARO: "caro",
  START: "start",
  PLAYCARO: "play",
  NOTFOUND: "*",
};
export const MENUACCOUNT = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);
export const CONFIG_GFAMES = {
  QUANTITY_SQUARES: 20,
};
export const LINKTO = {
  STARTCARO: "/games/caro/start",
};
export const API = {
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
};
