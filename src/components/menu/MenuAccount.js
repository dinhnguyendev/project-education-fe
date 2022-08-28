import { Menu } from "antd";

const MenuAccount = ({ handleAccount }) => {
  return (
    <Menu
      onClick={(e) => handleAccount(e)}
      items={[
        {
          key: "1",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
        {
          key: "logout",
          label: (
            <div target="_blank" rel="noopener noreferrer">
              Logout
            </div>
          ),
        },
      ]}
    />
  );
};

export default MenuAccount;
