import styles from './HeaderCarousel.module.css';
import CarouselCompaund from '../../components/Carousel/Carousel';

const HeaderCarousel = () => {
  return (
    <div className={styles.HeaderCarousel}>
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
        <CarouselCompaund.Page>
          <div className={styles.catalog}>
            <div className={styles.items}>
              <div className={styles.item + ' ' + styles.item3}>
              <div className={styles.transparentItem}>"ds"</div>
              </div>
            </div>
          </div>
        </CarouselCompaund.Page>
      </CarouselCompaund>
    </div>
  );
};

export default HeaderCarousel;
