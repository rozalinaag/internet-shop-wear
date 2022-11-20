import styles from './Main.module.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import CartForCatalog from '../../components/CartForCatalog/CartForCatalog';
import CarouselCompaund from '../../components/Carousel/Carousel';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
  const [carts, setCarts] = useState([
    {
      id: 1,
      img: [
        'https://i.pinimg.com/564x/f2/2b/bf/f22bbff16533b3693b5b0955f605d3c3.jpg',
      ],
      name: 'Товар скоро поступит',
      price: '599',
      description: 'Товар скоро поступит',
    },
    {
      id: 2,
      img: [
        'https://i.pinimg.com/564x/f2/2b/bf/f22bbff16533b3693b5b0955f605d3c3.jpg',
      ],
      name: 'Товар скоро поступит',
      price: '599',
      description: 'Товар скоро поступит',
    },
    {
      id: 3,
      img: [
        'https://i.pinimg.com/564x/f2/2b/bf/f22bbff16533b3693b5b0955f605d3c3.jpg',
      ],
      name: 'Товар скоро поступит',
      price: '599',
      description: 'Товар скоро поступит',
    },
  ]);
  const [fetching, setFetching] = useState(true); // true if we want to load new data

  useEffect(() => {
    if (fetching) {
      axios
        .get(process.env.REACT_APP_HOST + `/carts`)
        .then((response) => {
          setCarts([...response.data]);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  const id_items = [0, 1, 2];

  const showCartItems = (count) => {
    if (count === 3) {
      return (
        <div className={styles.items}>
          <Link to={'/catalog/' + carts[0].id} className={styles.item}>
            <CartForCatalog
              id={carts[0]?.id}
              img={carts[0]?.img[0]}
              name={carts[0]?.name}
              price={carts[0]?.price}
              description={carts[0]?.description}
            />
          </Link>
          <Link to={'/catalog/' + carts[1]?.id} className={styles.item}>
            <CartForCatalog
              id={carts[1]?.id}
              img={carts[1]?.img[0]}
              name={carts[1]?.name}
              price={carts[1]?.price}
              description={carts[1]?.description}
            />
          </Link>
          <Link to={'/catalog/' + carts[2]?.id} className={styles.item}>
            <CartForCatalog
              id={carts[2]?.id}
              img={carts[2]?.img[0]}
              name={carts[2]?.name}
              price={carts[2]?.price}
              description={carts[2]?.description}
            />
          </Link>
        </div>
      );
    } else if (count == 2) {
      return (
        <div className={styles.items}>
          <Link to={'/catalog/' + carts[0]?.id} className={styles.item}>
            <CartForCatalog
              id={carts[0]?.id}
              img={carts[0]?.img[0]}
              name={carts[0]?.name}
              price={carts[0]?.price}
              description={carts[0]?.description}
            />
          </Link>
          <Link to={'/catalog/' + carts[1]?.id} className={styles.item}>
            <CartForCatalog
              id={carts[1]?.id}
              img={carts[1]?.img[0]}
              name={carts[1]?.name}
              price={carts[1]?.price}
              description={carts[1]?.description}
            />
          </Link>
        </div>
      );
    } else {
      return (
        <div className={styles.items}>
          <Link to={'/catalog/' + carts[0]?.id} className={styles.item}>
            <CartForCatalog
              id={carts[0]?.id}
              img={carts[0]?.img[0]}
              name={carts[0]?.name}
              price={carts[0]?.price}
              description={carts[0]?.description}
            />
          </Link>
        </div>
      );
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
            <div className={styles.catalog}>{showCartItems(3)}</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems(3)}</div>
          </CarouselCompaund.Page>
        </CarouselCompaund>
      </div>

      <div className={styles.carousel + ' ' + styles.carouselForLaptop}>
        <CarouselCompaund infinite>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems(3)}</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>{showCartItems(3)}</div>
          </CarouselCompaund.Page>
        </CarouselCompaund>
      </div>

      <div className={styles.carousel + ' ' + styles.carouselForTablet}>
        <CarouselCompaund infinite transitionTime={300}>
          {id_items.map((item) => (
            <CarouselCompaund.Page>
              <div className={styles.catalog}>{showCartItems(2)}</div>
            </CarouselCompaund.Page>
          ))}
        </CarouselCompaund>
      </div>

      <div className={styles.carousel + ' ' + styles.carouselForMobile}>
        <CarouselCompaund infinite transitionTime={300}>
          {id_items.map((id_item) => (
            <CarouselCompaund.Page>
              <div className={styles.catalog}>
                <div className={styles.items}>
                  <Link
                    to={'/catalog/' + carts[id_item]?.id}
                    className={styles.item}
                  >
                    <CartForCatalog
                      id={carts[id_item]?.id}
                      img={carts[id_item]?.img[0]}
                      name={carts[id_item]?.name}
                      price={carts[id_item]?.price}
                      description={carts[id_item]?.description}
                    />
                  </Link>
                </div>
              </div>
            </CarouselCompaund.Page>
          ))}
        </CarouselCompaund>
      </div>
    </div>
  );
};

export default Main;
