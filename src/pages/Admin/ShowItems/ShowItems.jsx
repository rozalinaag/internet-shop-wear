import React from 'react';
import './ShowItems.css';
import { useState, useEffect } from 'react';
import CartForCatalog from '../../../components/CartForCatalog/CartForCatalog';
import { Link } from 'react-router-dom';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import HeaderAdmin from '../Components/HeaderAdmin/HeaderAdmin';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom';
import axios from "../../../axios";

function ShowItems() {
  const [carts, setCarts] = useState([]);
  const [fetching, setFetching] = useState(true); // true if we want to load new data
  const navigate = useNavigate();

  const handlerDelete = (id_art) => {
    confirmAlert({
      title: 'Удалить элемент?',
      buttons: [
        {
          label: 'Да',
          onClick: () => {
            axios({
              method: 'POST',
              url: process.env.REACT_APP_HOST + `/api/article/remove`,
              data: {
                id_articles: [id_art],
              },
            })
              .then((response) => {
                console.log(response);
              })
              .finally(() => {
                setCarts([]);
                setFetching(true);
                navigate('/admin/showitems');
              });
          },
        },
        {
          label: 'Нет',
          onClick: () => {},
        },
      ],
    });
  };

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          process.env.REACT_APP_HOST + `/api/article/get?_limit=1000&_page=0`
        )
        .then((response) => {
          setCarts([...carts, ...response.data]);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  return (
    <div>
      <HeaderAdmin />
      <div className="catalog">
        <div className="catalog--body show--body">
          {carts.length > 0 ? (
            carts.map((cart) => (
              <div className="show--item">
                <div className="change--delete">
                  <Link to={`/admin/edititem/${cart.id_art}/${cart.name}/${cart.price}/${cart.description}/${cart.code}/${cart.is_active}`} className="change">
                    <EditOutlined/>
                  </Link>
                  <div className="delete">
                    <CloseOutlined onClick={() => handlerDelete(cart.id_art)} />
                  </div>
                </div>
                <CartForCatalog
                  key={cart.id}
                  name={cart.name}
                  id_art={cart.id_art}
                  is_active={cart.is_active}
                  code={cart.code}
                  img={cart.img}
                  price={cart.price}
                />
              </div>
            ))
          ) : (
            <div>Пока что нет товаров. Создайте их, нажав кнопку "Создать"</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowItems;
