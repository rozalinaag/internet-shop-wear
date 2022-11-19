import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from './OpenCart.module.css';
import { Link } from 'react-router-dom';
import Footer from '../../screens/Footer/Footer';
import CarouselCompaund from '../../components/Carousel/Carousel';

const OpenCart = () => {
  const [load, setLoad] = useState(true);
  const [dataCart, setDataCart] = useState({
    id: '',
    img: [''],
    name: '',
    price: '',
    description: '',
  });
  const [mainPicture, setMainPicture] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (load) {
      fetch(process.env.REACT_APP_HOST + `/carts/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (load === true) {
            setDataCart({
              id: data.id,
              img: data.img,
              name: data.name,
              price: data.price,
              description: data.description,
            });
            setLoad(false);
            setMainPicture(data.img[0]);
          }
        }).catch((err) => {
        
          setDataCart({
            id: id,
            img: [''],
            name: 'Товар скоро поступит',
            price: '0',
            description: 'Товар скоро поступит',
          });
        })
    }
  }, [load, dataCart, id]);

  useEffect(() => {
    window.scrollTo(0, 0); //при переходе на эту страницу скролл поднимается в самое начало
  }, [load]);

  const changeMainPicture = (img) => {
    console.log(img);
    setMainPicture(img);
  };

  return (
    <>
        <div className={style.backLink}>
          <Link to="/catalog">Каталог -{'>'}</Link>
          <Link> Товар</Link>
        </div>
      <div className={style.slider}>
        <CarouselCompaund infinite transitionTime={0}>
          {dataCart.img.map((img) => (
            <CarouselCompaund.Page>
              <div className={style.itemSlider}>
                <img height="380px" width="290px" src={img} alt="" />
              </div>
            </CarouselCompaund.Page>
          ))}
        </CarouselCompaund>
      </div>
      <div className={style.body}>

        <div className={style.bodyPictures}>
          <div className={style.fourPictures}>
            {dataCart.img.map((img) => (
              <Link
                onClick={(e) => changeMainPicture(img)}
                className={style.picture}
              >
                <img
                  className={style.fourPictureLaptop}
                  height="175px"
                  width="140px"
                  src={img}
                  alt=""
                />
                <img
                  className={style.fourPictureMobile}
                  height="100px"
                  width="80px"
                  src={img}
                  alt=""
                />
              </Link>
            ))}
          </div>
          <div className={style.pictureMainMonitor + ' ' + style.pictureMain}>
            <img height="730px" width="600px" src={mainPicture} alt="" />
          </div>
          <div className={style.pictureMain + ' ' + style.pictureMainLaptop}>
            <img height="500px" width="400px" src={mainPicture} alt="" />
          </div>
          <div className={style.pictureMain + ' ' + style.pictureMainMobile}>
            <img height="300px" width="240px" src={mainPicture} alt="" />
          </div>
        </div>

        <div className={style.bodyItems}>
          <h3 className={style.item + ' ' + style.name}>{dataCart.name}</h3>
          <div className={style.item + ' ' + style.price}>
            {dataCart.price} ₽
          </div>
          <div className={style.item + ' ' + style.description}>
            {dataCart.description}
          </div>
          <div className={style.item + ' ' + style.id}>
            Код товара: {dataCart.id}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OpenCart;
