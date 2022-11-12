import styles from './Main.module.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import Cart from '../../components/Cart/Cart';
//import Carousel from '../../components/Carousel/Carousel';
import CarouselCompaund from '../../components/Carousel/Carousel';
import { Link } from 'react-router-dom';

const Main = () => {

  const id_items = [1, 2, 3, 4];
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
                 <Link to={"/catalog/" + 1} className={styles.item}>
                   <Cart id={1} />
                 </Link>
                 <Link to={"/catalog/" + (2)} className={styles.item}>
                   <Cart id={2} />
                 </Link>
                 <Link to={"/catalog/" + (3)} className={styles.item}>
                   <Cart id={3} />
                 </Link>
                 <Link to={"/catalog/" + (4)} className={styles.item}>
                   <Cart id={4} />
                 </Link>
               </div>
             </div>
           </CarouselCompaund.Page>
           <CarouselCompaund.Page>
             <div className={styles.catalog}>
               <div className={styles.items}>
                 <Link to={"/catalog/" + 2} className={styles.item}>
                   <Cart id={2} />
                 </Link>
                 <Link to={"/catalog/" + (3)} className={styles.item}>
                   <Cart id={3} />
                 </Link>
                 <Link to={"/catalog/" + (4)} className={styles.item}>
                   <Cart id={4} />
                 </Link>
                 <Link to={"/catalog/" + (1)} className={styles.item}>
                   <Cart id={1} />
                 </Link>
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
                 <Link to={"/catalog/" + 1} className={styles.item}>
                   <Cart id={1} />
                 </Link>
                 <Link to={"/catalog/" + (2)} className={styles.item}>
                   <Cart id={2} />
                 </Link>
                 <Link to={"/catalog/" + (3)} className={styles.item}>
                   <Cart id={3} />
                 </Link>
               </div>
             </div>
           </CarouselCompaund.Page>
           <CarouselCompaund.Page>
             <div className={styles.catalog}>
               <div className={styles.items}>
                 <Link to={"/catalog/" + 4} className={styles.item}>
                   <Cart id={4} />
                 </Link>
                 <Link to={"/catalog/" + (1)} className={styles.item}>
                   <Cart id={1} />
                 </Link>
                 <Link to={"/catalog/" + (2)} className={styles.item}>
                   <Cart id={2} />
                 </Link>
               </div>
             </div>
           </CarouselCompaund.Page>
           <CarouselCompaund.Page>
             <div className={styles.catalog}>
               <div className={styles.items}>
                 <Link to={"/catalog/" + 3} className={styles.item}>
                   <Cart id={3} />
                 </Link>
                 <Link to={"/catalog/" + (4)} className={styles.item}>
                   <Cart id={4} />
                 </Link>
                 <Link to={"/catalog/" + (1)} className={styles.item}>
                   <Cart id={1} />
                 </Link>
               </div>
             </div>
           </CarouselCompaund.Page>
        </CarouselCompaund>
      </div>

      <div className={styles.carousel + ' ' + styles.carouselForTablet}>
        <CarouselCompaund infinite transitionTime={300}>

        {id_items.map((id) => (     
             <CarouselCompaund.Page>
             <div className={styles.catalog}>
               <div className={styles.items}>
                 <Link to={"/catalog/" + id} className={styles.item}>
                   <Cart id={id} />
                 </Link>
                 <Link to={"/catalog/" + (id + 2)} className={styles.item}>
                   <Cart id={id+2} />
                 </Link>
               </div>
             </div>
           </CarouselCompaund.Page>
            ))}
          
        </CarouselCompaund>
      </div>

      <div className={styles.carousel + ' ' + styles.carouselForMobile}>
        <CarouselCompaund infinite transitionTime={300}>
          {id_items.map((id) => (     
             <CarouselCompaund.Page>
             <div className={styles.catalog}>
               <div className={styles.items}>
                 <Link to={"/catalog/" + id} className={styles.item}>
                   <Cart id={id} />
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
