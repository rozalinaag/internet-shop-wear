import React from 'react'
import "./ShowItems.css";
import { useState, useEffect } from 'react';
import axios from 'axios'
import CartForCatalog from '../../../components/CartForCatalog/CartForCatalog';
import { Link } from 'react-router-dom';
import {EditOutlined, CloseOutlined} from '@ant-design/icons';

function ShowItems() {
  const [carts, setCarts] = useState([]);
  const [fetching, setFetching] = useState(true); // true if we want to load new data

  useEffect(() => {
    if(fetching){
      axios.get(process.env.REACT_APP_HOST + `/carts`)
            .then(response => {
              setCarts([...carts, ...response.data])
            })
            .finally(() => setFetching(false));
    } 
  }, [fetching])

  return (
    <div>
      <div className="catalog">
        <div className="catalog--body show--body">
          {carts.length > 0 ? (carts.map(cart => 
              <div className="show--item" >
                <div className='change--delete'>
                  <Link to = "/admin/create" className='change'><EditOutlined /></Link>
                  <div className='delete'><CloseOutlined /></div>
                </div>
                <CartForCatalog key={cart.id} name={cart.name} img={cart.img[0]} price={cart.price}/>
              </div>
            )): <div>Пока что нет товаров. Создайте их, нажав кнопку "создать"</div>}
        </div>
      </div>
    </div>
  )
}

export default ShowItems
