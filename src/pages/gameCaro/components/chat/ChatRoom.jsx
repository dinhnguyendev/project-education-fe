import { CopyOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Comment, Form, Avatar, Input, Tooltip } from "antd";
import React from "react";
import "./chatRoom.css";

const ChatRoom = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };
  const onValuesChange = (e) => {
    console.log(e);
  };
  return (
    <div className="chat">
      <div className="chat__header">Chat Game</div>
      <div className="chat__controller">
        <div className="chat__box">
          <div className="chat__box__message">
            <Comment
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
              author={<a>Han Solo</a>}
              content={
                <div className="chat__content">
                  We supply a series of design principles, practical patterns and high quality
                  design resources (Sketch and Axure), to help people create their product
                  prototypes beautifully and efficiently.
                </div>
              }
            />
            <div className="chat__text">
              <div className="chat__text__title">We supply a series of design principles,</div>
            </div>
          </div>
        </div>
        <div className="chat__item">
          <Form layout="inline" onValuesChange={onValuesChange} onFinish={handleSubmit}>
            <div className="chat__input">
              <Form.Item name="chat">
                <Input placeholder="nhập vào nội dung chat" />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" icon={<SendOutlined />} />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
