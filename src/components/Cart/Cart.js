import styles from './Cart.module.css';
import React, {useState} from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';

const Cart = (props) => {

  const [data, setData] = useState({
    id: "",
    img: "", 
    name: "", 
    price: "", 
    description: ""
  });

  const [load, SetLoad] = useState(false);

  const Componeny = () => {

    
    if (load==false){
      fetch(process.env.REACT_APP_HOST + '/carts/' + props.id)
      .then(response => response.json())
      .then(
        (data) => {
        if (load == false) {
          setData({
            id: data.id,
            img: data.img, 
            name: data.name,  
            price: data.price, 
            description: data.description
          });
          SetLoad(true);
        }
      });
    }

  }

  Componeny();
  console.log(data);
  console.log(process.env.REACT_APP_HOST)

  return (
    <div>
      <div className={styles.cart}>
        <div className={styles.cartHeader}>
          <div className={styles.picture}>
            <img width = "400" height="500" alt="picture" src={data.img}></img>
          </div>
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.topName}>Бестселлер</div>
          <a className={styles.name + " " + styles.a } >{data.name}</a>
          <div className={styles.price}>{data.price}₽</div>
          <div className={styles.description}>
            <button className={styles.button}>Подробнее</button>
            <ArrowRightOutlined />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
