import { notification } from "antd";

export const handleNotification = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
  });
};
