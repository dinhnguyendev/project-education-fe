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
  BAUCUA: "gourd-crab-shrimp-fish",
  CON_RUA: "turtle",
  NOTFOUND: "*",
  ADMIN: "/cms",
  CARO_MANAGER: "caro-manager",
  USER_MANAGER: "user-manager",
  HOME_MANAGER: "home",
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
export const BLOCKCHAIN = {
  ABI: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "Danky",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "receiveMoney",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "_vi",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "_id",
          type: "string",
        },
      ],
      name: "SM_ban_data",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "send",
      type: "event",
    },
    {
      inputs: [],
      name: "withdrawMoney",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "arrHocvien",
      outputs: [
        {
          internalType: "string",
          name: "_ID",
          type: "string",
        },
        {
          internalType: "address",
          name: "_VI",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "balances",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "minter",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "Tongtien",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  ADDRESSSM: "",
  addressSM: "0x189AA92ed7831101A4eadd32556cBc796e89b579",
  ADDRESS_CONTRACT_RECEIVE: "0x906A717Bd3A8ce16Be5Cae78d71994f667Cd09a5",
};
