import styles from './Cart.module.css';
import React, { useState, useEffect } from 'react';

const Cart = ({id}) => {
  const [data, setData] = useState({
    id: '',
    img: '',
    name: '',
    price: '',
    description: '',
  });

  const [load, setLoad] = useState(true);

  useEffect(() => {
      if (load) {
        fetch(process.env.REACT_APP_HOST + `/carts/${id}`)
          .then((response) => response.json())
          .then((data) => {
            if (load === true) {
                setData({
                  id: data?.id,
                  img: data?.img,
                  name: data?.name,
                  price: data?.price,
                  description: data?.description,
                });
              setLoad(false);
            }
          }).catch((err) => {
            setData({
              id: id,
              img: [''],
              name: 'Товар скоро поступит',
              price: '0',
              description: 'Товар скоро поступит',
            });
            setLoad(false);
          })
      }
    }, [load]);

  return (
    <div>
      <div className={styles.cart}>
        <div className={styles.cartHeader}>
          <div className={styles.picture + ' ' + styles.picture1}>
            <img width="400" height="500" alt="" src={data.img[0]}></img>
          </div>
          <div className={styles.picture + ' ' + styles.pictureLaptop}>
            <img width="350" height="450" alt="" src={data.img[0]}></img>
          </div>
          <div className={styles.picture + ' ' + styles.pictureForMobile}>
            <img width="300" height="400" alt="" src={data.img[0]}></img>
          </div>
          <div className={styles.picture + ' ' + styles.pictureForMiniMobile}>
            <img width="200" height="300" alt="" src={data.img[0]}></img>
          </div>
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.topName}>Бестселлер</div>
          <a href="/catalog" className={styles.name + ' ' + styles.a}>
            {data.name}
          </a>
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
