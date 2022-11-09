import Main from '../screens/Main/Main';
import Footer from '../screens/Footer/Footer';
import Benefits from '../screens/Benefits/Benefits';
import HeaderCarousel from '../screens/HeaderCarousel/HeaderCarousel';
import Header from '../screens/Header/Header';


const Home = () => {
  return (
    <div>
      <HeaderCarousel/>
      <Main/>
      <Benefits/>
      <Footer/>
    </div>
  )
}

export default Home;