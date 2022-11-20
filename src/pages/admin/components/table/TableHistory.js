import { Table } from "antd";
import React, { memo } from "react";

const TableHistory = ({ columns, dataTable }) => {
  const datas = dataTable?.result;
  return (
    <div>
      <Table columns={columns} dataSource={datas} />
    </div>
  );
};

export default memo(TableHistory);
