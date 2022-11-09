import './App.css';
import Header from './screens/Header/Header';
import { Routes, Route, Link } from 'react-router-dom';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Catalog from './pages/Catalog/Catalog';
import Notfoundpage from './pages/Notfoundpage';
import OpenCart from './pages/OpenCart';
import Home from './pages/Home';
import {
  HomeOutlined,
  PhoneOutlined,
  TeamOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';

const App = () => {
  return (
    <div>
      <Header>
        <Link key={1} id={1} to="/" className="item main desktop">
          Главная
        </Link>
        <Link key={2} id={2} to="/catalog" className="item katalog desktop">
          Каталог
        </Link>
        <a key={3} id={3} href="#t1" className="item contacts desktop">
          Контакты
        </a>
        <Link key={4} id={4} to="/about" className="item about-us desktop">
          О нас
        </Link>

        <div className="mobile header-main">
          <Link key={1} id={1} to="/" className="item main mobile">
            <HomeOutlined />
          </Link>
          <div className="part-icons mobile">
            <Link key={2} id={2} to="/catalog" className="item katalog mobile">
              <ShoppingOutlined />
            </Link>
            <a key={3} id={3} href="#t1" className="item contacts mobile">
              <PhoneOutlined />
            </a>
            <Link key={4} id={4} to="/about" className="item about-us mobile">
              <TeamOutlined />
            </Link>
          </div>
        </div>
      </Header>
      <Routes>
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </div>
  );
};

export default App;
