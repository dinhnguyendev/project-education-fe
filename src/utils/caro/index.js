export const createEmptyArray = (height, width) => {
  let data = [];

  for (let i = 0; i < height; i++) {
    data.push([]);
    for (let j = 0; j < width; j++) {
      data[i][j] = {
        x: i,
        y: j,
        isX: true,
        isClicked: false,
        isMyTurn: true,
        Ischeck: null,
      };
    }
  }
  return data;
};
export const initBoardData = (height, width) => {
  console.log("chay lai ham init");
  let data = createEmptyArray(height, width);
  return data;
};
export const ConverAccoutWallet = (wallet) => {
  const first = wallet.slice(0, 4);
  const last = wallet.slice(-4);
  const respon = `${first}...${last}`;
  return respon;
};
