import { message } from "antd";
import { API, LINKTO } from "../constants/constants";
import axiosClient from "./axiosClient";

export const register = async (value, t) => {
  try {
    const data = await axiosClient.post(API.REGISTER, value);
    return data;
  } catch (error) {
    console.log(error);
    message.error(t(`error.${error?.response?.data?.message}`));
  }
};
export const login = async (value, t) => {
  try {
    const data = await axiosClient.post(API.LOGIN, value);
    return data;
  } catch (error) {
    console.log(error);
    message.error(t(`error.${error?.response?.data?.message}`));
  }
};
export const logout = async (navigate) => {
  try {
    const data = await axiosClient.get(API.LOGOUT);
    return data;
  } catch (error) {
    navigate(LINKTO.LOGIN);
  }
};
export const getUser = async (id) => {
  try {
    const data = await axiosClient.get(`${API.GETBYID}/${id}`);
    return data;
  } catch (error) {}
};
