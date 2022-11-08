import Footer from "../../screens/Footer/Footer"
import HeaderCarousel from "../../screens/HeaderCarousel/HeaderCarousel"
import './Catalog.css';
import Cart from '../../components/Cart/Cart';
import axios from 'axios';
import { useState, useEffect } from "react";
const Catalog = () => {

  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [fetching, setFetching] = useState(true); // true if we want to load new data
  const [totalCount, setTotalCount] = useState(10);

  useEffect(() => {
    if(fetching){
      console.log('fetching')
      axios.get(process.env.REACT_APP_HOST + `/carts?_limit=3&_page=${currentPage}`)
            .then(response => {
              setPhotos([...photos, ...response.data])
              setCurrentPage(prevState => prevState + 1)
              setTotalCount(100)
            })
            .finally(() => setFetching(false));
    } 
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function() {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) <100 
        && photos.length < totalCount){
      setFetching(true);
    }
    
  }

  return (
    <div>
      <HeaderCarousel/>
      <div className="catalog">
        <div className="catalog--body">
          {photos.map(photo => 
              <div className="catalog--item" key={photo.id}>
                <div >
                  {photo.id}. {photo.name}
                </div>
                <img src={photo.img} alt=""/>
              </div>
            )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export {Catalog}