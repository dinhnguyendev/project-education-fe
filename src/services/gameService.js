import { API } from "../constants/constants";
import axiosClient from "./axiosClient";

export const getLeaderBoards = async (data) => {
  const res = await axiosClient.get(`${API.GAME.LEADERBROADS}`);
  return res;
};
