import { API } from "../constants/constants";
import axiosClient from "./axiosClient";

export const createGameTurle = async (data) => {
  const res = await axiosClient.post(`${API.GAMETURLE.CREATE}`, data);
  return res;
};
