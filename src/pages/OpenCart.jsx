import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartForCatalog from '../components/CartForCatalog/CartForCatalog';

const OpenCart = () => {
  const [load, setLoad] = useState(true);
  const [dataCart, setDataCart] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (load) {
      fetch
        (process.env.REACT_APP_HOST + `/carts/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (load === true) {
            setDataCart({
              id: data.id,
              img: data.img[0],
              name: data.name,
              price: data.price,
              description: data.description,
            });
            //check lenght in img, if lenght==1: then it do
            setLoad(false);      
          }
        });
    }
  }, [load, dataCart, id]);
  // console.log(JSON.parse(dataCart).img[0]);

  return (
    <div>
      <h1>{dataCart.name}</h1>
      <CartForCatalog  
          id ={dataCart.id}
          img={dataCart.img} 
          name={dataCart.name} 
          price = {dataCart.price}
       />
    </div>
  );
};

export default OpenCart;
