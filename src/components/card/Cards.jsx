import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import './card.css';
const { Meta } = Card;
const Cards = () => {
  return (
    <div className='cards'>
      <Card
        style={{ 
            borderRadius: "5px",
            margin: "2px",
            overflow: "hidden",
            border: "1px solid white !important"
            }}
        cover={
          <img
            alt="example"
            src="https://play-lh.googleusercontent.com/Z8odU30RMas0hnf13UXl2xg285x5ez3N2vpTUKS3bN8ddo6nzEVyXYbnrjbLEHMya1c"
          />
        }      
      
      >
      </Card>
    <div className="cards__content">
    <div>
      <div className="cards__content__heading">Card heading</div>
      <div className="cards__content__title">Card title</div>
    </div>
    </div>

    </div>
    
  )
}

export default Cards