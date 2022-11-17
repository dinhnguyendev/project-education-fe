import React from "react";
import "./helpers.css";
import { Divider, Tag, Statistic, Typography } from "antd";
import { LinkOutlined, LeftCircleOutlined } from "@ant-design/icons";
import Icon from "./../icon/Icon";
import { BLOCKCHAIN, LINKTO } from "./../../constants/constants";
import brg_helpers from "../../assets/image/brg_helpers.png";
import { Link } from "react-router-dom";
const { Paragraph } = Typography;
const Helpers = () => {
  return (
    <div className="helpers__box">
      <div className="helpers">
        <Link to={LINKTO.HOME} className="helpers__back">
          <i className="far fa-arrow-alt-circle-left helpers__back__icon"></i>
          <div className="helpers__back__text">Trở về</div>
        </Link>
        <div className="helpers__inf">
          <Tag color="success">
            <div className="helper__heading">Lấy token miễn phí</div>
          </Tag>
        </div>
        <img className="helpers__image" src={brg_helpers} alt="" />
        <div className="helpers__content">
          <a href="https://metamask.zendesk.com/hc/vi/articles/360015489031-C%C3%A1ch-th%C3%AAm-c%C3%A1c-token-ch%C6%B0a-%C4%91%C6%B0%E1%BB%A3c-li%E1%BB%87t-k%C3%AA-token-t%C3%B9y-ch%E1%BB%89nh-trong-MetaMask">
            <Tag color="blue">
              <div className="helpers__content__link">
                Link hướng dẫn <LinkOutlined />
              </div>
            </Tag>
          </a>
        </div>
        <div className="infor__contract">
          <div className="infor__contract__heading">Thông tin contract của đồng Peer</div>
          <div className="infor__contract__item">
            <div className="infor__contract__item__container">
              Địa chỉ dùng để import vào ví (Peer)
              <Paragraph
                copyable={{
                  text: `${BLOCKCHAIN.ADDRESS__SM__PEER}`,
                }}
              >
                <div className="infor__contract__text">{BLOCKCHAIN.ADDRESS__SM__PEER}</div>
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpers;
