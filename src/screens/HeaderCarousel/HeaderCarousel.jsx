import styles from './HeaderCarousel.module.css';
import CarouselCompaund from '../../components/Carousel/Carousel';

const HeaderCarousel = () => {
  return (
    <div className={styles.HeaderCarousel}>
      <div className={styles.HeaderMonitor} >
      <CarouselCompaund infinite transitionTime={0}>
        <CarouselCompaund.Page>
          <div className={styles.catalog}>
            <div className={styles.items}>
              <div className={styles.item + ' ' + styles.item1}>
                <div className={styles.transparentItem}>""</div>
              </div>
            </div>
          </div>
        </CarouselCompaund.Page>
        <CarouselCompaund.Page>
          <div className={styles.catalog}>
            <div className={styles.items}>
              <div className={styles.item + ' ' + styles.item2}>
              <div className={styles.transparentItem}>"43"</div>
              </div>
            </div>
          </div>
        </CarouselCompaund.Page>
      </CarouselCompaund>
      </div>
      <div className={styles.headerForMobile}>
        <div className={styles.downArow}>\/</div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
