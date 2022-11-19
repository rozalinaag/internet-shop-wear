import './App.css';
import Header from './screens/Header/Header';
import { Routes, Route, NavLink } from 'react-router-dom';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Catalog from './pages/Catalog/Catalog';
import Notfoundpage from './pages/Notfoundpage';
import OpenCart from './pages/OpenCart/OpenCart';
import Home from './pages/Home';
import Contacts from './pages/Contacts/Contacts';
import LoginDemo from './pages/Admin/Autorization/Autorization';
import CreateCart from './pages/Admin/CreateCart/CreateCart';
import ShowItems from './pages/Admin/ShowItems/ShowItems';
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
        <NavLink key={1} id={1} to="/" className="item main desktop">
          Главная
        </NavLink>
        <NavLink key={2} id={2} to="/catalog" className="item katalog desktop">
          Каталог
        </NavLink>
        <NavLink
          key={3}
          id={3}
          to="/contacts"
          className="item contacts desktop"
        >
          Контакты
        </NavLink>
        <NavLink key={4} id={4} to="/about" className="item about-us desktop">
          О нас
        </NavLink>

        <div className="mobile header-main">
          <NavLink key={1} id={1} to="/" className="item main mobile">
            <HomeOutlined />
          </NavLink>
          <div className="part-icons mobile">
            <NavLink
              key={2}
              id={2}
              to="/catalog"
              className="item katalog mobile"
            >
              <ShoppingOutlined />
            </NavLink>
            <NavLink
              key={3}
              id={3}
              to="/contacts"
              className="item contacts mobile"
            >
              <PhoneOutlined />
            </NavLink>
            <NavLink
              key={4}
              id={4}
              to="/about"
              className="item about-us mobile"
            >
              <TeamOutlined />
            </NavLink>
          </div>
        </div>
      </Header>
      <Routes>
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/catalog/:id" element={<OpenCart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Notfoundpage />} />
        <Route path="/admin" element={<LoginDemo />} />
        <Route path="/admin/create" element={<CreateCart />} />
        <Route path="/admin/showitems" element={<ShowItems />} />
      </Routes>
    </div>
  );
};

export default App;
