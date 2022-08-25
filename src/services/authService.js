import { API } from "../constants/constants";
import axiosClient from "./axiosClient";

export const handleRegister = async (values, setLoading) => {
  console.log(values);
  try {
    setLoading(true);
    const { phone, email, password, username } = values;
    const user = {
      phone: phone.trim(),
      email: email.trim(),
      password: password.trim(),
      username: username.trim(),
    };
    console.log(phone, email, password, username);
    const data = await axiosClient.post(API.REGISTER, user);
    console.log(data);
    setLoading(false);
    return data;
  } catch (err) {
    console.log(err.message);
    setLoading(false);
  }
};
