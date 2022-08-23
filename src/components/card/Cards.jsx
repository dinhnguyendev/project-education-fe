import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import icon from '../../assets/image/iconvideo.svg';
import './card.css';
const { Meta } = Card;
const Cards = () => {
  return (
    <div className="cards">
      <div className="cards_item">
        <img
          className="cards__image"
          src="https://store-images.s-microsoft.com/image/apps.10174.13510798886680377.121bfd20-7a82-47e8-86af-589c3275e643.54fd036e-35d7-4822-83f8-ae4d7ea64d66?mode=scale&q=90&h=300&w=300"
          alt=""
        />
      </div>
      <div className="cards__content">
        <div>
          <div className="cards__content__heading">Card heading</div>
          <div className="cards__content__title">Card title</div>
        </div>
      </div>
      <div className="cards__hover">
        <div className="cards__hover__heading">Dice</div>
        <img src={icon} className="cards__hover__icon" />
        <div className="cards__hover__name">Dice</div>
      </div>
    </div>
  );
};

export default Cards;
