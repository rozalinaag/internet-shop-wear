import './Header.css';
import Icon, { DownOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div className="header">
      <div className='header-main'>
        <div className="header-gap"></div>
        <div className="header-items items">
          <a className="item">Главная</a>
          <a className="item">Контакты</a>
          <a className="item">Каталог</a>
          <a className="item">О нас</a>
        </div>
      </div>
      <a className='downOutlined'>
        <DownOutlined style={{ color: 'white', fontSize: '40px', fontWeight: '800' }}/>
      </a>
    </div>
  );
};

export default Header;
