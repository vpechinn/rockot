import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";

import styles from "./DropDown.module.scss";

const items = [
  {
    key: "1",
    label: "Item 1",
  },
  {
    key: "2",
    label: "Item 2",
  },
  {
    key: "3",
    label: "Item 3",
  },
];
const App = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ["3"],
    }}
  >
    <Typography.Link>
      <Space>
        <p className={styles.dropdown__text}>Каталог Типовых Услуг</p>
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);
export default App;
