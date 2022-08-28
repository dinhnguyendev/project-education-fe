import { API, LINKTO } from "../../constants/constants";
import axiosClient from "../../services/axiosClient";
import { message } from "antd";
import { login, logout, register } from "../../services/authService";
import { logoutActionRedux } from "../../redux/userSlice";
export const handleRegister = async (values, setLoading, t, navigate) => {
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
    const respon = await register(user, t);
    if (respon) {
      navigate(LINKTO.LOGIN);
      message.success(t(`error.${respon?.data?.message}`));
    }
    setLoading(false);
  } catch (err) {
    message.error(t(`error.${err?.response?.data?.message}`));
    setLoading(false);
  }
};
export const handleLogin = async (values, setLoading, t, navigate) => {
  try {
    setLoading(true);
    const { phone, password } = values;
    const user = {
      phone: phone.trim(),
      password: password.trim(),
    };
    const respon = await login(user, t);

    setLoading(false);
    return respon.data;
  } catch (err) {
    setLoading(false);
  }
};
export const hadleLogout = async (t, navigate, dispatch) => {
  try {
    const respon = await logout(navigate);
    if (respon) {
      navigate(LINKTO.LOGIN);
      await dispatch(logoutActionRedux());
      message.success(t(`success.${respon?.data?.message}`));
    }
  } catch (err) {}
};
