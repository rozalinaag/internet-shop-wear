import styles from './Main.module.css';
import {ArrowRightOutlined} from '@ant-design/icons';
import CartForCatalog from '../../components/CartForCatalog/CartForCatalog';
import CarouselCompaund from '../../components/Carousel/Carousel';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "../../axios";


const Main = () => {
    const [carts, setCarts] = useState([
        {
            id_art: 1,
            img: 'https://incanto.eu/upload/webp/resize_cache/90f/9999_1430_1/pn7a3rvd6z7tv6hdu7la2cj7p6bmlm1d.webp',
            name: 'Трусы с мягкими чашками на стане CD122 Очень мягкие очень очень очень',
            price: '3999',
            is_active: false,
            description:
                'Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка',
        },
        {
            id_art: 2,
            img: 'http://localhost:8000/uploads/%D0%9C%D0%BE%D0%B5%20%D1%84%D0%BE%D1%82%D0%BE.3c8f424.jpg',
            name: 'Трусы с мягкими чашками на стане CD122 Очень мягкие очень очень очень',
            price: '3999',
            is_active: false,
            description:
                'Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка',
        },
        {
            id_art: 3,
            img: '/../back/uploads/signers/uploads/signers/IMG_3761_2.jpg',
            name: 'Трусы с мягкими чашками на стане CD122 Очень мягкие очень очень очень',
            price: '3999',
            is_active: false,
            description:
                'Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка',
        },
    ]);
    const [fetching, setFetching] = useState(true); // true if we want to load new data

    useEffect(() => {
        if (fetching) {
            axios
                .get(process.env.REACT_APP_HOST + `/api/article/get?_limit=6&_page=0`)
                .then((response) => {
                    setCarts([...response.data]);
                })
                .finally(() => setFetching(false));
        }
    }, [fetching]);


    const showCartItems = (page, count) => {
        const cell = [];
        for (let i = page * count; i < page * count + count; i++) {
            cell.push(<Link to={'/catalog/' + carts[i].id_art} className={styles.item}>
                <CartForCatalog
                    id_art={carts[i]?.id_art}
                    img={carts[i]?.img}
                    name={carts[i]?.name}
                    is_active={carts[i]?.is_active}
                    price={carts[i]?.price}
                    description={carts[i]?.description}
                />
            </Link>);
        }
        return (
            <div className={styles.items}>
                {cell}
            </div>
        );
    };

    const showPageItems = (count_card) => {
        const rows = [];
        if (carts.length > 0) {
            let count_page = carts.length % count_card
            for (let i = 0; i < count_page; i++) {
                rows.push(
                    <CarouselCompaund.Page>
                        <div className={styles.catalog}>{showCartItems(i, count_card)}</div>
                    </CarouselCompaund.Page>
                );
            }
            return (
                <CarouselCompaund infinite transitionTime={300}>
                    {rows}
                </CarouselCompaund>
            );
        }
    };


    return (
        <div className={styles.main}>
            <a href="/catalog" className={styles.mainHeader}>
                <div className={styles.headerName}>Перейти в каталог</div>
                <div className={styles.headerArrow}>
                    <ArrowRightOutlined/>
                </div>
            </a>

            <div className={styles.carousel}>
                {showPageItems(3)}
            </div>

            <div className={styles.carousel + ' ' + styles.carouselForLaptop}>
                {showPageItems(3)}
            </div>

            <div className={styles.carousel + ' ' + styles.carouselForTablet}>
                {showPageItems(2)}
            </div>

            <div className={styles.carousel + ' ' + styles.carouselForMobile}>
                {showPageItems(1)}
            </div>
        </div>
    );
};

export default Main;
