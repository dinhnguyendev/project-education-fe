import { CopyOutlined } from "@ant-design/icons";
import { Button, Form, Input, Tooltip } from "antd";
import React from "react";

const ChatRoom = () => {
  return (
    <div className="chat">
      <div className="chat__header">Chat</div>
      <div className="chat__controller">
        <div className="chat__box">
          <div className="chat__text">hello</div>
          <div className="chat__text">hello you</div>
        </div>
        <div className="chat__item">
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item>
              <Input
                // prefix={}
                placeholder="nhập vào nội dung chat"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
