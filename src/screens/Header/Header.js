import "./Header.css";

const Header = () => {
  

  return (
    <div className = "header">
        <div className="header-gap">
          
        </div>
        <div className = "header-items items">
          <a className = "item">
            Главная 
          </a>
          <a className = "item">
            Контакты 
          </a>
          <a className = "item">
            Каталог 
          </a>
          <a className = "item">
            О нас 
          </a>
        </div>
        
    </div>
  );
};

export default Header;