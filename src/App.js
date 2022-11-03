import './App.css';
import Header from './screens/Header/Header';
import Main from './screens/Main/Main';
import Footer from './screens/Footer/Footer';
import Benefits from './screens/Benefits/Benefits';
import {Routes, Route, Link} from 'react-router-dom';
import { Aboutpage } from './pages/Aboutpage';
import { Catalog } from './pages/Catalog';
import {Notfoundpage} from './pages/Notfoundpage';
import {OpenCart} from './pages/OpenCart';


function App() {

  return (
    <div>
      <Header>
          <a key={1} id={1} href='/' className="item main">Главная</a>
          <a key={2} id={2} href='/catalog' className="item katalog">Каталог</a>
          <a key={3} id={3} href='/' className="item contacts">Контакты</a>
          <a key={4}  id={4} href='/about' className="item about-us">О нас</a>
      </Header>
      <Main/>
      <Benefits/>
      <Footer/>
      <Routes>
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="*" element={<Notfoundpage/>} />
        <Route path="/openCart" element={<OpenCart/>} />
      </Routes>
    </div>
  );
}

export default App;
