import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import "./login.css";
import { LockOutlined, LoginOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import logo from "../../assets/image/logologin.svg";
import { LINKTO } from "../../constants/constants";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../../actions/auth/authActions";
import { useDispatch } from "react-redux";
import { loginActionRedux } from "../../redux/userSlice";

const Login = () => {
  const [loading, setLoading] = useState();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const user = await handleLogin(values, setLoading, t, navigate);
    await dispatch(loginActionRedux(user.data));
    if (user) {
      navigate(LINKTO.HOME);
      message.success(t(`error.${user?.message}`));
    }
  };
  return (
    <div className="login">
      <div className="login__form">
        <div className="login__logo">
          <img src={logo} className="login__logo__image" />
        </div>
        <h2 className="login__heading">{t("login.heading")}</h2>
        <div className="login__form__item">
          <Form
            name="normal_login"
            className="login-form login-form-submit"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
              ]}
            >
              <Input prefix={<PhoneOutlined />} placeholder="Phone" className="form__input" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                className="form__input"
              />
            </Form.Item>
            <div className="register__title">
              <span className="register__question"> {t("register.title")} ?</span>
              <Link to={LINKTO.REGISTER}>{t("register.heading")}</Link>
            </div>
            <Form.Item className="form__item">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                icon={<LoginOutlined />}
              >
                {t("login.heading")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
