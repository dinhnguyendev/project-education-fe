import { CopyOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Comment, Form, Avatar, Input, Tooltip } from "antd";
import React from "react";
import { useState } from "react";
import socket from "../../../../socket.io/socket.io";
import "./chatRoom.css";

const ChatRoom = ({ dataLocation, user }) => {
  const [chatList, setChatList] = useState([]);
  const [typing, setTyping] = useState(false);
  const [form] = Form.useForm();
  const handleSubmit = (e) => {
    if (e.chat) {
      const data = {
        ...dataLocation,
        ...user,
        values: e.chat,
      };
      socket.emit("server--chat-room-caro", data);
      socket.emit("client--chat-room-caro--off-typing", { ...dataLocation, ...user });
      form.resetFields();
    }
  };
  const handleSrcoll = () => {
    const timer = setTimeout(() => {
      const chatTag = document.querySelector(".chat__box");
      chatTag.scrollTop = chatTag.scrollHeight;
    }, 10);
    return () => clearTimeout(timer);
  };
  socket.on("server--chat--caro--message", (data) => {
    setChatList(data);
  });
  socket.on("server--chat--caro--typing", (data) => {
    if (data.phone != user.phone) {
      setTyping(true);
    }
  });
  socket.on("server--chat--caro--off-typing", (data) => {
    if (data.phone !== user.phone) {
      setTyping(false);
    }
  });
  const onValuesChange = (e) => {
    socket.emit("client--chat-room-caro--typing", { ...dataLocation, ...user });
  };
  return (
    <div className="chat">
      <div className="chat__header">Chat Game</div>
      <div className="chat__controller">
        <div className="chat__box">
          <div className="chat__box__message">
            {chatList?.map((chatItem, index) => {
              let ItemDom;
              chatItem.phone == user.phone
                ? (ItemDom = (
                    <div key={index} className="chat__text">
                      <div className="chat__text__title">{chatItem.values}</div>
                    </div>
                  ))
                : (ItemDom = (
                    <Comment
                      key={index}
                      avatar={<Avatar src={chatItem.avatar} alt={chatItem.username} />}
                      author={<a>{chatItem.username}</a>}
                      content={<div className="chat__content">{chatItem.values}</div>}
                    />
                  ));
              chatList.length > 0 && chatList.length - 1 == index && handleSrcoll();
              return ItemDom;
            })}
          </div>
        </div>
        {typing && (
          <div className="chat__item__typing">
            <div className="chat__item__typing__text">đối thủ đang chat</div>
            <div class="typing">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
        )}
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
                  autoFocus
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
