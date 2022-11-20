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
      id_art: 1,
      img: 'https://incanto.eu/upload/webp/resize_cache/90f/9999_1430_1/pn7a3rvd6z7tv6hdu7la2cj7p6bmlm1d.webp',
      name: 'Трусы с мягкими чашками на стане CD122 Очень мягкие очень очень очень',
      price: '3999',
      is_active: false,
      description:
        'Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка',
    },
    {
      id_art: 2,
      img: 'https://incanto.eu/upload/webp/resize_cache/90f/9999_1430_1/pn7a3rvd6z7tv6hdu7la2cj7p6bmlm1d.webp',
      name: 'Трусы с мягкими чашками на стане CD122 Очень мягкие очень очень очень',
      price: '3999',
      is_active: false,
      description:
        'Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка',
    },
    {
      id_art: 3,
      img: 'https://incanto.eu/upload/webp/resize_cache/90f/9999_1430_1/pn7a3rvd6z7tv6hdu7la2cj7p6bmlm1d.webp',
      name: 'Трусы с мягкими чашками на стане CD122 Очень мягкие очень очень очень',
      price: '3999',
      is_active: false,
      description:
        'Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка',
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
              id_art={carts[0]?.id_art}
              img={carts[0]?.img}
              name={carts[0]?.name}
              is_active={carts[0]?.is_active}
              price={carts[0]?.price}
              description={carts[0]?.description}
            />
          </Link>
          <Link to={'/catalog/' + carts[1]?.id} className={styles.item}>
            <CartForCatalog
              id_art={carts[1]?.id_art}
              img={carts[1]?.img}
              name={carts[1]?.name}
              is_active={carts[1]?.is_active}
              price={carts[1]?.price}
              description={carts[1]?.description}
            />
          </Link>
          <Link to={'/catalog/' + carts[2]?.id} className={styles.item}>
            <CartForCatalog
              id_art={carts[2]?.id_art}
              img={carts[2]?.img}
              name={carts[2]?.name}
              is_active={carts[2]?.is_active}
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
              id_art={carts[0]?.id_art}
              img={carts[0]?.img}
              name={carts[0]?.name}
              is_active={carts[0]?.is_active}
              price={carts[0]?.price}
              description={carts[0]?.description}
            />
          </Link>
          <Link to={'/catalog/' + carts[1]?.id} className={styles.item}>
            <CartForCatalog
              id_art={carts[1]?.id_art}
              img={carts[1]?.img}
              name={carts[1]?.name}
              is_active={carts[1]?.is_active}
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
              id_art={carts[0]?.id_art}
              img={carts[0]?.img}
              name={carts[0]?.name}
              is_active={carts[0]?.is_active}
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
                    to={'/catalog/' + carts[id_item]?.id_art}
                    className={styles.item}
                  >
                    <CartForCatalog
                      id_art={carts[id_item]?.id_art}
                      img={carts[id_item]?.img}
                      name={carts[id_item]?.name}
                      is_active={carts[id_item]?.is_active}
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
