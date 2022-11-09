import './Header.css';
//import Icon, { DownOutlined } from '@ant-design/icons';


const Header = ({children}) => {
  return (
    <div className="header">
        <div className="header-items items">
          {children}
        </div>
    </div>
  );
};

export default Header;
