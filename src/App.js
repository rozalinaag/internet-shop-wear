import './App.css';
import Header from './screens/Header/Header';
import {Routes, Route, Link} from 'react-router-dom';
import { Aboutpage } from './pages/Aboutpage/Aboutpage';
import { Catalog } from './pages/Catalog/Catalog';
import {Notfoundpage} from './pages/Notfoundpage';
import {OpenCart} from './pages/OpenCart';
import { Home } from './pages/Home';


function App() {

  return (
    <div>
      <Header>
          <Link key={1} id={1} to='/' className="item main">Главная</Link>
          <Link key={2} id={2} to='/catalog' className="item katalog">Каталог</Link>
          <a key={3} id={3} href="#t1" className="item contacts">Контакты</a>
          <Link key={4}  id={4} to='/about' className="item about-us">О нас</Link>
      </Header>
      <Routes>
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="*" element={<Notfoundpage/>} />
        <Route path="/openCart" element={<OpenCart/>} />
      </Routes>
    </div>
  );
}

export default App;
