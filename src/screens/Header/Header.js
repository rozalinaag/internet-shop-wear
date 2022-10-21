import './Header.css';
import Icon, { DownOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div className="header">
      <div className='header-main'>
        
        <div className="header-gap"></div>
        <div className="header-items items">
          <a href='/' className="item main">Главная</a>
          <a className="item katalog">Каталог</a>
          <a className="item contacts">Контакты</a>
          <a className="item about-us">О нас</a>
        </div>
        
      </div>
      <a href="#top" id="menu" className='downOutlined'>
        <DownOutlined style={{ color: 'white', fontSize: '40px', fontWeight: '800' }}/>
      </a>
    </div>
  );
};

export default Header;
