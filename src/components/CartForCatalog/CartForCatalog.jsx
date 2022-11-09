import styles from './CartForCatalog.module.css';

const CartForCatalog = ({ id, img, name, price }) => {
  // console.log(id);

  return (
    <div className={styles.Cart}>
      <div className={styles.picture + ' ' + styles.picture1}>
        <img height="400px" width= "320px" src={img} alt=""/>
      </div>
      <div className={styles.picture + ' ' + styles.pictureForMobile}>
            <img  height="300px" width="230px" alt="" src={img}/>
      </div>
      <div className={styles.CartBody}>
          <div className={styles.name}> {name} </div>
          <div className={styles.price}>{price} ₽</div>
      </div>
    </div>
  );
};

export default CartForCatalog;
