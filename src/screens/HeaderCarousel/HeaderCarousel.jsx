import styles from './HeaderCarousel.module.css';
import CarouselCompaund from '../../components/Carousel/Carousel';

const HeaderCarousel = () => {
  return (
    <div className={styles.HeaderCarousel}>
      <CarouselCompaund infinite TRANSITION_DURATION={0}>
        <CarouselCompaund.Page key={Math.random()}>
          <div className={styles.catalog}>
            <div className={styles.items}>
              <div className={styles.item + " " + styles.item1 }>
                <h1></h1>
              </div>
            </div>
          </div>
        </CarouselCompaund.Page>
        <CarouselCompaund.Page key={Math.random()}>
          <div className={styles.catalog}>
            <div className={styles.items}>
              <div className={styles.item + " " + styles.item2 }>
              <h1></h1>
              </div>
            </div>
          </div>
        </CarouselCompaund.Page>
        <CarouselCompaund.Page key={Math.random()}>
          <div className={styles.catalog}>
            <div className={styles.items}>
              <div className={styles.item + " " + styles.item3 }>
              <h1></h1>
              </div>
            </div>
          </div>
        </CarouselCompaund.Page>
      </CarouselCompaund>
    </div>
  );
};

export default HeaderCarousel;
