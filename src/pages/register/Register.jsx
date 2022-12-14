import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "../login/login.css";
import {
  LockOutlined,
  LoginOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import logo from "../../assets/image/logologin.svg";
import { handleRegister } from "../../actions/auth/authActions";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { LINKTO } from "../../constants/constants";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values);
    await handleRegister(values, setLoading, t, navigate);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      <div className="login__form">
        <div className="login__logo">
          <img src={logo} className="login__logo__image" />
        </div>
        <h2 className="login__heading">{t("register.heading")}</h2>
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
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder={t("login.username")}
                className="form__input"
                allowClear
              />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder={t("login.phone")}
                className="form__input"
                allowClear
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your email!",
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<MailOutlined />}
                placeholder={t("login.email")}
                className="form__input"
                allowClear
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder={t("login.password")}
                className="form__input"
                allowClear
              />
            </Form.Item>
            <Form.Item
              name="conform password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("The two passwords that you entered does not match.");
                  },
                }),
              ]}
              hasFeedback
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder={t("login.confirmpassword")}
                className="form__input"
                allowClear
              />
            </Form.Item>
            <div className="register__title">
              <span className="register__question"> {t("register.title")} ?</span>
              <Link to={LINKTO.LOGIN}>{t("login.heading")}</Link>
            </div>
            <Form.Item className="form__item">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                icon={<LoginOutlined />}
                loading={loading}
              >
                {t("register.heading")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
