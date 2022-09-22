import { CopyOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Comment, Form, Avatar, Input, Tooltip } from "antd";
import React from "react";
import { useState } from "react";
import socket from "../../../../socket.io/socket.io";
import "./chatRoom.css";

const ChatRoom = ({ dataLocation, user }) => {
  const [chatList, setChatList] = useState([]);
  const [form] = Form.useForm();
  const handleSubmit = (e) => {
    if (e.chat) {
      const data = {
        ...dataLocation,
        ...user,
        values: e.chat,
      };
      socket.emit("server--chat-room-caro", data);
      form.resetFields();
    }
  };
  const handleSrcoll = () => {
    console.log("hadle srcoll");
    const chatTag = document.querySelector(".chat__box");
    chatTag.scrollTop = chatTag.scrollHeight;
  };
  socket.on("server--chat--caro--message", (data) => {
    console.log("data server--chat--caro--message");
    console.log(data);
    setChatList(data);
  });
  const onValuesChange = (e) => {
    console.log(e);
  };
  console.log(chatList.length - 1);
  console.log(typeof (chatList.length - 1));
  return (
    <div className="chat">
      <div className="chat__header">Chat Game</div>
      <div className="chat__controller">
        <div className="chat__box">
          <div className="chat__box__message">
            {chatList?.map((chatItem, index) =>
              chatItem.phone == user.phone ? (
                <div key={index} className="chat__text">
                  <div className="chat__text__title">{chatItem.values}</div>
                </div>
              ) : (
                (<Comment
                  key={index}
                  avatar={<Avatar src={chatItem.avatar} alt={chatItem.username} />}
                  author={<a>{chatItem.username}</a>}
                  content={<div className="chat__content">{chatItem.values}</div>}
                />)(chatList.length > 0 && chatList.length - 1 == index && handleSrcoll() )
              )
            )}
          </div>
        </div>
        <div className="chat__item">
          <Form form={form} layout="inline" onValuesChange={onValuesChange} onFinish={handleSubmit}>
            <div className="chat__input">
              <Form.Item name="chat" className="chat__input__item">
                <Input
                  size="large"
                  style={{ width: "100%" }}
                  placeholder="nhập vào nội dung chat"
                  allowClear
                  autocomplete="off"
                />
              </Form.Item>
              <Form.Item className="chat__input__button">
                <Button size="large" htmlType="submit" icon={<SendOutlined />} />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
