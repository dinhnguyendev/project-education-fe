import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import icon from "../../assets/image/iconvideo.svg";
import "./card.css";
const { Meta } = Card;
const Cards = ({ image, heading }) => {
  return (
    <div className="cards">
      <div className="cards_item">
        <img className="cards__image" src={image} alt="" />
      </div>
      <div className="cards__content">
        <div>
          <div className="cards__content__heading">{heading}</div>
          <div className="cards__content__title">play now</div>
        </div>
      </div>
      <div className="cards__hover">
        <div className="cards__hover__heading">Play</div>
        <img src={icon} className="cards__hover__icon" />
        <div className="cards__hover__name">Peergame</div>
      </div>
    </div>
  );
};

export default Cards;
