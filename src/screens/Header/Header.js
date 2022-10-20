import "./Header.css";

const Header = () => {
  

  return (
    <div className = "header">
        <div className="header-gap">
          
        </div>
        <div className = "header-items items">
          <div className = "item">
            Главная 
          </div>
          <div className = "item">
            Контакты 
          </div>
          <div className = "item">
            Каталог 
          </div>
          <div className = "item">
            О нас 
          </div>
        </div>
    </div>
  );
};

export default Header;