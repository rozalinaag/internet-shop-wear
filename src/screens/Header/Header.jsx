import './Header.css';
//import Icon, { DownOutlined } from '@ant-design/icons';


const Header = ({children}) => {
  return (
    <div className="header">
        <div className="header-items items">
          {children}
        </div>
      {/* 
      <a href="#top" id="menu" className='downOutlined'>
        <DownOutlined style={{ color: 'white', fontSize: '30px', fontWeight: '800' }}/>
      </a>*/}
    </div>
  );
};

export default Header;
