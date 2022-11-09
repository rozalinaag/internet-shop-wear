import Footer from "../../screens/Footer/Footer"
import HeaderCarousel from "../../screens/HeaderCarousel/HeaderCarousel"
import './Catalog.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import CartForCatalog from "../../components/CartForCatalog/CartForCatalog";


const Catalog = () => {

  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); 
  const [fetching, setFetching] = useState(true); // true if we want to load new data
  const [totalCount, setTotalCount] = useState(10);

  useEffect(() => {
    if(fetching){
      console.log('fetching')
      axios.get(process.env.REACT_APP_HOST + `/carts?_limit=8&_page=${currentPage}`)
            .then(response => {
              setPhotos([...photos, ...response.data])
              setCurrentPage(prevState => prevState + 1)
              setTotalCount(100)
              console.log(response.data);
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

  return (
    <div>
      <HeaderCarousel/>
      <div className="catalog-title">Каталог</div>
      <div className="catalog">
        <div className="catalog--body">
          {photos.map(photo => 
              <div className="catalog--item" key={photo.id}>
                <CartForCatalog key={photo.id} name={photo.name} img={photo.img} price={photo.price}/>
              </div>
            )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Catalog;