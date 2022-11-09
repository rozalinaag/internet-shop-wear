import styles from './Cart.module.css';
import React, { useState } from 'react';

const Cart = (props) => {
  const [data, setData] = useState({
    id: '',
    img: '',
    name: '',
    price: '',
    description: '',
  });

  const [load, SetLoad] = useState(false);

  const Componeny = () => {
    if (load === false) {
      fetch(process.env.REACT_APP_HOST + '/carts/' + props.id)
        .then((response) => response.json())
        .then((data) => {
          if (load === false) {
            setData({
              id: data.id,
              img: data.img,
              name: data.name,
              price: data.price,
              description: data.description,
            });
            SetLoad(true);
          }
        });
    }
  };

  Componeny();

  return (
    <div>
      <div className={styles.cart}>
        <div className={styles.cartHeader}>
          <div className={styles.picture + ' ' + styles.picture1}>
            <img width="400" height="500" alt="" src={data.img}></img>
          </div>
          <div className={styles.picture + ' ' + styles.pictureLaptop}>
            <img width="350" height="450" alt="" src={data.img}></img>
          </div>
          <div className={styles.picture + ' ' + styles.pictureForMobile}>
            <img width="300" height="400" alt="" src={data.img}></img>
          </div>
          <div className={styles.picture + ' ' + styles.pictureForMiniMobile}>
            <img width="200" height="300" alt="" src={data.img}></img>
          </div>
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.topName}>Бестселлер</div>
          <a href="/catalog" className={styles.name + ' ' + styles.a}>{data.name}</a>
          <div className={styles.price}>{data.price}₽</div>
          <a href="/catalog" className={styles.description}>
            <button className={styles.button}>Подробнее</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
