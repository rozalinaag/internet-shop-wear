import styles from './Main.module.css';
import Icon, { ArrowRightOutlined } from '@ant-design/icons';
import Cart from '../../components/Cart/Cart';
import Carousel from '../../components/Carousel/Carousel';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainHeader}>
        <div className={styles.headerName}>Перейти в каталог</div>
        <a className={styles.headerArrow}>
          <ArrowRightOutlined />
        </a>
      </div>

      <Carousel>
          <div className={styles.item}>
            <Cart id={1} />
          </div>
          <div className={styles.item}>
            <Cart id={2} />
          </div>
          <div className={styles.item}>
            <Cart id={4} />
          </div>
          <div className={styles.carouselItem +" "+ styles.carousel1}>
          Item1
          </div>
          <div className={styles.carouselItem +" "+ styles.carousel2}>
          Item2
          </div>
          <div className={styles.carouselItem +" "+ styles.carousel3}>
          Item1
          </div>
      </Carousel>

      <div className={styles.catalog}>
        <div className={styles.items}>
          <div className={styles.item}>
            <Cart id={1} />
          </div>
          <div className={styles.item}>
            <Cart id={2} />
          </div>
          <div className={styles.item}>
            <Cart id={4} />
          </div>
        </div>
      </div>
      <p>
        <a name="top"></a>
      </p>
    </div>
  );
};

export default Main;
