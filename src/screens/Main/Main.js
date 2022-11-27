import styles from './Main.module.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import CartForCatalog from '../../components/CartForCatalog/CartForCatalog';
import CarouselCompaund from '../../components/Carousel/Carousel';
import { Link } from 'react-router-dom';
import { useState, useEffect, Children } from 'react';
import axios from "../../axios";

const Main = () => {
  const [carts, setCarts] = useState([
    {
      id_art: undefined,
      img: 'https://i.pinimg.com/564x/f2/2b/bf/f22bbff16533b3693b5b0955f605d3c3.jpg',
      name: 'Товар скоро поступит',
      price: '1999',
      is_active: false,
      code: 1,
      description: 'Товар скоро поступит',
    },
    {
      id_art: undefined,
      img: 'https://i.pinimg.com/564x/f2/2b/bf/f22bbff16533b3693b5b0955f605d3c3.jpg',
      name: 'Товар скоро поступит',
      price: '599',
      is_active: false,
      code: 3,
      description: 'Товар скоро поступит',
    },
    {
      id_art: undefined,
      img: 'https://i.pinimg.com/564x/f2/2b/bf/f22bbff16533b3693b5b0955f605d3c3.jpg',
      name: 'Товар скоро поступит',
      price: '2999',
      is_active: false,
      code: 4,
      description: 'Товар скоро поступит',
    },
  ]);
  const [fetching, setFetching] = useState(true); // true if we want to load new data
  const [lenCarts, setLenCarts] = useState();
  const [id_mass, setId_mass] = useState();

  useEffect(() => {
    if (fetching) {
      axios
        .get(process.env.REACT_APP_HOST + `/api/article/get?_limit=6&_page=0`)
        .then((response) => {
          let cart_ex = [...response.data];
          if (cart_ex.length != 0) {
            console.log([...response.data]);
            setCarts([...response.data]);
          }
        })
        .finally(() => setFetching(false));
    }
    setLenCarts(carts.length);
  }, [fetching]);

  const id_items = [0, 1, 2];

  useEffect(() => {
    if (lenCarts == 6) {
      setId_mass([0, 1, 2, 3, 4, 5]);
    } else if (lenCarts == 5) {
      setId_mass([0, 1, 2, 3, 4, 0]);
    } else if (lenCarts == 4) {
      setId_mass([0, 1, 2, 3, 0, 1]);
    } else if (lenCarts == 3) {
      setId_mass([0, 1, 2, 0, 1, 2]);
    } else if (lenCarts == 2) {
      setId_mass([0, 1, 0, 1, 0, 1]);
    } else if (lenCarts == 1) {
      setId_mass([0, 0, 0, 0, 0, 0]);
    } else if (lenCarts == 0) {
      setId_mass([0, 1, 2, 0, 1, 2]);
    }
  }, [lenCarts]);

  const showCartItems = (mass_id) => {
    const rows = [];
    if (id_mass && carts) {
      for (let i = 0; i < mass_id.length; i++) {
        let id_art_catalog = carts[id_mass[mass_id[i]]]?.id_art;
        if (id_art_catalog == undefined) {
          id_art_catalog = '';
        }
        rows.push(
          <Link to={'/catalog/' + id_art_catalog} className={styles.item}>
            <CartForCatalog
              id_art={carts[id_mass[mass_id[i]]]?.id_art}
              img={carts[id_mass[mass_id[i]]]?.img}
              name={carts[id_mass[mass_id[i]]]?.name}
              is_active={carts[id_mass[mass_id[i]]]?.is_active}
              price={carts[id_mass[mass_id[i]]]?.price}
              code={carts[id_mass[mass_id[i]]]?.code}
              description={carts[id_mass[mass_id[i]]]?.description}
            />
          </Link>
        );
      }
      return <div className={styles.items}>{rows}</div>;
    }
  };

  return (
    <div className={styles.main}>
      <a href="/catalog" className={styles.mainHeader}>
        <div className={styles.headerName}>Перейти в каталог</div>
        <div className={styles.headerArrow}>
          <ArrowRightOutlined />
        </div>
      </a>

      <div className={styles.carousel}>
        <CarouselCompaund infinite transitionTime={300}>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([0, 1, 2])}</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([3, 4, 5])}</div>
          </CarouselCompaund.Page>
        </CarouselCompaund>
      </div>

      <div className={styles.carousel + ' ' + styles.carouselForLaptop}>
        <CarouselCompaund infinite>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([0, 1, 2])}</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([3, 4, 5])}</div>
          </CarouselCompaund.Page>
        </CarouselCompaund>
      </div>

      <div className={styles.carousel + ' ' + styles.carouselForTablet}>
        <CarouselCompaund infinite transitionTime={300}>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([0, 1])}</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([2, 3])}</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([4, 5])}</div>
          </CarouselCompaund.Page>
        </CarouselCompaund>
      </div>

      <div className={styles.carousel + ' ' + styles.carouselForMobile}>
        <CarouselCompaund infinite transitionTime={300}>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([0])}</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([1])}</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([2])}</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([3])}</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([4])}</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems([5])}</div>
          </CarouselCompaund.Page>
        </CarouselCompaund>
      </div>
    </div>
  );
};

export default Main;
