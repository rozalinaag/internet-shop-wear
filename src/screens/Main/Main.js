import styles from './Main.module.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import Cart from '../../components/Cart/Cart';
//import Carousel from '../../components/Carousel/Carousel';
import CarouselCompaund from '../../components/Carousel/Carousel';

const Main = () => {
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

      <div className={styles.carousel + ' ' + styles.carouselForLaptop}>
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

      <div className={styles.carousel + ' ' + styles.carouselForTablet}>
        <CarouselCompaund infinite transitionTime={300}>
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

      <div className={styles.carousel + ' ' + styles.carouselForMobile}>
        <CarouselCompaund infinite transitionTime={300}>
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
    </div>
  );
};

export default Main;
