import { getLeaderBoards } from "../../services/gameService";

export const handleLeaderBoardsAction = async () => {
  const res = await getLeaderBoards();
  return res;
};
