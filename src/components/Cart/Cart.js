import styles from './Cart.module.css';
import Icon, { DownOutlined } from '@ant-design/icons';
import gatsbyIconImage from "../../assets/img/catalog1.PNG";
import React, {useState} from 'react';


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
            <img width = "500" height="600" alt="picture" src={data.img}></img>
          </div>
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.name} >{data.name}</div>
          <div className={styles.price}>{data.price}</div>
          <div className={styles.description}>
            Подробнее
            <DownOutlined></DownOutlined>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
