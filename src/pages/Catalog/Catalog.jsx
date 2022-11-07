import Footer from "../../screens/Footer/Footer"
import HeaderCarousel from "../../screens/HeaderCarousel/HeaderCarousel"
import styles from './Catalog.module.css';
import Cart from '../../components/Cart/Cart';

const Catalog = () => {
  return (
    <div>
      <HeaderCarousel/>
      <div className={styles.Catalog}>
        <div className={styles.CatalogBody}>
          <Cart key={1} id={1} />
          <Cart key={2} id={2} />
          <Cart key={3} id={3} />
          <Cart key={4} id={4} />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export {Catalog}