import Footer from "../../screens/Footer/Footer"
import HeaderCarousel from "../../screens/HeaderCarousel/HeaderCarousel"
import './Catalog.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import CartForCatalog from "../../components/CartForCatalog/CartForCatalog";
import { Link } from 'react-router-dom';
import { BackTop } from 'antd';

const Catalog = () => {

  const [photos, setPhotos] = useState([
  ]);
  const [currentPage, setCurrentPage] = useState(0); 
  const [fetching, setFetching] = useState(true); // true if we want to load new data
  const [totalCount, setTotalCount] = useState(10);

  useEffect(() => {
    if(fetching){
      axios.get(process.env.REACT_APP_HOST + `/carts?_limit=8&_page=${currentPage}`)
            .then(response => {
              setPhotos([...photos, ...response.data])
              setCurrentPage(prevState => prevState + 1)
              setTotalCount(100)
            })
            .finally(() => setFetching(false));
    } 
  }, [fetching, currentPage, photos])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler);
    }
  })

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) <100 
        && photos.length < totalCount){
      setFetching(true);
    }
    
  }

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: '50px',
    backgroundColor: '#c58b8b',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: '15px'
  };

  return (
    <div >
        <HeaderCarousel/>
      <div className="catalog-title">Каталог</div>
      <div className="catalog">
        <div className="catalog--body">
          {photos.map(photo => 
              <Link to = {`/catalog/${photo.id}`} className="catalog--item" key={photo.id}>
                <CartForCatalog key={photo.id} name={photo.name} img={photo.img[0]} price={photo.price}/>
              </Link>
            )}
        </div>
      </div>
      <BackTop className="backTop">
      <div style={style}>/\</div>
      </BackTop>
      <Footer></Footer>
    </div>
  )
}

export default Catalog;