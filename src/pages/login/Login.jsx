import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import './login.css';
import { LockOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/image/logologin.svg';
const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => {
  const { t } = useTranslation();
  return (
    <div className="login">
      <div className="login__form">
        <div className="login__logo">
          <img src={logo} className="login__logo__image" />
        </div>
        <h2 className="login__heading">{t('login.heading')}</h2>
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
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                className="form__input"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
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

            <Form.Item className="form__item">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                icon={<LoginOutlined />}
              >
                {t('login.heading')}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
