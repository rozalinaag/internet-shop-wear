import Footer from '../../screens/Footer/Footer';
import HeaderCarousel from '../../screens/HeaderCarousel/HeaderCarousel';
import './Catalog.css';
import { useState, useEffect } from 'react';
import CartForCatalog from '../../components/CartForCatalog/CartForCatalog';
import { Link } from 'react-router-dom';
import { BackTop } from 'antd';
import axios from "../../axios";

const Catalog = () => {
  const [carts, setCarts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true); // true if we want to load new data
  const [totalCount, setTotalCount] = useState(10);

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          process.env.REACT_APP_HOST +
            `/api/article/get?_limit=8&_page=${currentPage}`
        )
        .then((response) => {
          setCarts([...carts, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
          setTotalCount(100);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching, currentPage, carts]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  });

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      carts.length < totalCount
    ) {
      setFetching(true);
    }
  };

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: '50px',
    backgroundColor: '#c58b8b',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: '15px',
  };

  return (
    <div>
      <HeaderCarousel />
      <div className="catalog-title">Каталог</div>
      <div className="catalog">
        <div className="catalog--body">
          {carts.length > 0 ? (
            carts.map((cart) => (
              <Link
                to={`/catalog/${cart.id_art}`}
                className="catalog--item"
                key={cart.id_art}
              >
                <CartForCatalog
                  key={cart.id_art}
                  name={cart.name}
                  img={cart.img}
                  price={cart.price}
                  code={cart.code}
                  is_active={cart.is_active}
                />
              </Link>
            ))
          ) : (
            <div>Пока что нет доступных товаров :(</div>
          )}
        </div>
      </div>
      <BackTop className="backTop">
        <div style={style}>/\</div>
      </BackTop>
      <Footer></Footer>
    </div>
  );
};

export default Catalog;
