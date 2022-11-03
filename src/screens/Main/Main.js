import styles from './Main.module.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import Cart from '../../components/Cart/Cart';
//import Carousel from '../../components/Carousel/Carousel';
import CarouselCompaund from '../../components/Carousel/Carousel';


const Main = () => {
  return (
    <div className={styles.main}>

      <div className={styles.mainHeader}>
        <div className={styles.headerName}>Перейти в каталог</div>
        <a className={styles.headerArrow}>
          <ArrowRightOutlined />
        </a>
      </div>

      <div className={styles.carousel}>
        <CarouselCompaund infinite>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart key={1} id={1} />
                </div>
                <div className={styles.item}>
                  <Cart  key={2} i id={2} />
                </div>
                <div className={styles.item}>
                  <Cart  key={3} id={3} />
                </div>
                <div className={styles.item}>
                  <Cart  key={4} i id={4} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={5} />
                </div>
                <div className={styles.item}>
                  <Cart id={6} />
                </div>
                <div className={styles.item}>
                  <Cart id={7} />
                </div>
                <div className={styles.item}>
                  <Cart id={8} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
        </CarouselCompaund>
      </div>

      <div className={styles.carousel + " " + styles.carouselForLaptop}>
        <CarouselCompaund infinite>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={1} />
                </div>
                <div className={styles.item}>
                  <Cart id={2} />
                </div>
                <div className={styles.item}>
                  <Cart id={3} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={4} />
                </div>
                <div className={styles.item}>
                  <Cart id={5} />
                </div>
                <div className={styles.item}>
                  <Cart id={6} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
        </CarouselCompaund>
      </div>

      <div className={styles.carousel +" " + styles.carouselForTablet}>
        <CarouselCompaund infinite>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={1} />
                </div>
                <div className={styles.item}>
                  <Cart id={2} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={3} />
                </div>
                <div className={styles.item}>
                  <Cart id={4} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={5} />
                </div>
                <div className={styles.item}>
                  <Cart id={6} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={7} />
                </div>
                <div className={styles.item}>
                  <Cart id={8} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
        </CarouselCompaund>
      </div>

      <div className={styles.carousel +" " + styles.carouselForMobile}>
        <CarouselCompaund infinite>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={1} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={2} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={3} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={4} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={5} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className={styles.catalog}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <Cart id={6} />
                </div>
              </div>
            </div>
          </CarouselCompaund.Page>
        </CarouselCompaund>
      </div>

      <div className={styles.mainHeader + " " + styles.mainHeader2}>
        <div className={styles.headerName}>Перейти в каталог</div>
        <a className={styles.headerArrow}>
          <ArrowRightOutlined />
        </a>
      </div>
      <p>
        <a name="top"></a>
      </p>
    </div>
  );
};

export default Main;
