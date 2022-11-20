import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleHistoryTransaction } from "../../utils/api/handleApi";
import { Pagination, Table, Tag } from "antd";
import { useState } from "react";
import { CONTRACT__NAME } from "../../constants/contract";
import { get, isEmpty } from "lodash";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";
import queryString from "query-string";
import "./history.css";
import TableHistory from "../../pages/admin/components/table/TableHistory";
const HistoryTransaction = ({ addressContract, nameContract }) => {
  const [dataTable, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const parsed = queryString.parse(window.location.search);
  let navigate = useNavigate();
  console.log(window.location.pathname);
  const paramDefault = {
    pageSize: 10,
    pageNumber: 1,
  };

  const columns = [
    {
      title: "Tên Contract",
      dataIndex: "to",
      width: 150,
      render: (text) => {
        return nameContract;
      },
    },
    {
      title: "Ví chuyển",
      dataIndex: "from",
      width: 150,
      render: (text) => {
        return <Tag color="red">{text}</Tag>;
      },
    },
    {
      title: "Ví nhận",
      dataIndex: "to",
      render: (text) => {
        return <Tag color="green">{text}</Tag>;
      },
    },
    {
      title: "Peer token",
      dataIndex: "value",
      render: (value) => {
        if (value) {
          const data = +value / 1000000000000000000;
          return (
            <>
              <Tag color="#f50">{data}</Tag>
              Peer
            </>
          );
        }
      },
    },
  ];
  console.log(searchParams);
  useEffect(() => {
    if (isEmpty(parsed)) {
      console.log("data");
      const data = queryString.stringify(paramDefault);
      console.log(data);
      navigate(window.location.pathname + "?" + data);
    } else {
      console.log("dooooooooo");
      const pageSize = searchParams.get("pageSize");
      const pageNumber = searchParams.get("pageNumber");
      if (pageSize && pageNumber) {
        getList(pageSize, pageNumber);
      } else {
        getList(10, 1);
      }
    }
  }, [searchParams]);
  const getList = (pageSize, pageNumber) => {
    handleHistoryTransaction(addressContract, pageSize, pageNumber)
      .then((data) => {
        if (data?.result.length > 0) {
          setData(data);
        } else {
          setDisable(true);
        }
      })
      .catch((err) => {});
  };

  const handleChangePage = (isCheckAdd) => {
    const pageSize = searchParams.get("pageSize");
    const pageNumber = searchParams.get("pageNumber");
    let objectURL;
    if (isCheckAdd) {
      objectURL = {
        pageNumber: +pageNumber + 1,
        pageSize: pageSize,
      };
    } else {
      objectURL = {
        pageNumber: +pageNumber - 1,
        pageSize: pageSize,
      };
    }
    const data = queryString.stringify(objectURL);
    console.log(data);
    navigate(window.location.pathname + "?" + data);
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataTable?.result}
        loading={loading}
        // pagination={

        // }
      />

      <div className="pagination">
        <div className="pagination__left" onClick={() => handleChangePage(false)}>
          <LeftOutlined />
        </div>
        <div className="pagination__number">{searchParams.get("pageNumber")}</div>
        <div className="pagination__left" onClick={() => handleChangePage(true)}>
          <RightOutlined />
        </div>
      </div>
    </div>
  );
};

export default HistoryTransaction;
