import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from './OpenCart.module.css';
import { Link } from 'react-router-dom';
import Footer from '../../screens/Footer/Footer';
import CarouselCompaund from '../../components/Carousel/Carousel';

const OpenCart = () => {
  const [load, setLoad] = useState(true);
  const [dataCart, setDataCart] = useState({
    id_art: '',
    imgs: { 0: '', 1: '' },
    name: '',
    price: '',
    code: 1,
    is_active: true,
    description: '',
  });
  const [mainPicture, setMainPicture] = useState('');
  const { id } = useParams();
  const [text, setText] = useState('');

  useEffect(() => {
    if (load) {
      fetch(process.env.REACT_APP_HOST + `/api/article/get_by_id/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (load === true) {
            setDataCart({
              id_art: data[0].id_art,
              imgs: data[0].imgs,
              name: data[0].name,
              price: data[0].price,
              code: data[0].code,
              is_active: data[0].is_active,
              description: data[0].description,
            });
            setLoad(false);
            let txt = data[0].description;
            setText(txt);
            setMainPicture(data[0].imgs['0']);
          }
        })
        .catch((err) => {
          setDataCart({
            id_art: id,
            imgs: { 0: '', 1: '' },
            name: 'Товар скоро поступит',
            price: '0',
            code: 1,
            is_active: true,
            description: 'Товар скоро поступит',
          });
        });
    }
  }, [load, dataCart, id]);

  useEffect(() => {
    window.scrollTo(0, 0); //при переходе на эту страницу скролл поднимается в самое начало
  }, [load]);

  const changeMainPicture = (img) => {
    setMainPicture(img);
  };

  return (
    <>
      <div className={style.backLink}>
        <Link className={style.Link} to="/catalog">
          Каталог -{'>'}
        </Link>
        <Link className={style.Link}> Товар</Link>
      </div>
      <div className={style.slider}>
        <CarouselCompaund infinite transitionTime={0}>
          {Object.entries(dataCart.imgs).map(([key, value]) => (
            <CarouselCompaund.Page>
              <div className={style.itemSlider}>
                <img height="380px" width="290px" src={value} alt="" />
              </div>
            </CarouselCompaund.Page>
          ))}
        </CarouselCompaund>
      </div>
      <div className={style.body}>
        <div className={style.bodyPictures}>
          <div className={style.fourPictures}>
            {Object.entries(dataCart.imgs).map(([key, value]) => (
              <Link
                onClick={(e) => changeMainPicture(value)}
                className={style.picture}
              >
                <img
                  className={style.fourPictureLaptop}
                  height="175px"
                  width="140px"
                  src={value}
                  alt=""
                />
                <img
                  className={style.fourPictureMobile}
                  height="100px"
                  width="80px"
                  src={value}
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
          <div className={style.item + ' ' + style.description}>{text}</div>
          <div className={style.item + ' ' + style.id}>
            Код товара: {dataCart.code}
          </div>
          <div className={style.item + ' ' + style.id}>
            {dataCart.is_active ? 'Товар в наличии' : 'Товара нет'}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OpenCart;
