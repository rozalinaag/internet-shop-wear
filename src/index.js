import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);

// {
//   "id": 1,
//   "img": ["https://incanto.eu/upload/webp/resize_cache/90f/9999_1430_1/pn7a3rvd6z7tv6hdu7la2cj7p6bmlm1d.webp", "https://incanto.eu/upload/webp/resize_cache/385/9999_1430_1/oaqivxa4vsr30ruvcrjpek8gsm7sp3ra.webp", "https://incanto.eu/upload/webp/resize_cache/29c/9999_1430_1/9amh7wkmfo2k98r7668vaa4tien6v5f1.webp", "https://incanto.eu/upload/webp/resize_cache/03c/9999_1430_1/qlqwosir88kbsd9kby6h0v18lq070p7k.webp"],
//   "name": "Трусы с мягкими чашками на стане CD122 Очень мягкие очень очень очень",
//   "price": "3999",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 2,
//   "img": ["https://i.pinimg.com/564x/f2/2b/bf/f22bbff16533b3693b5b0955f605d3c3.jpg","https://incanto.eu/upload/webp/resize_cache/e80/9999_1430_1/e802882f2bae3f4ff00662d7fd2112fd.webp", "https://incanto.eu/upload/webp/resize_cache/eb9/9999_1430_1/eb92f2796f43bcc527bdaf4f78cf6ce9.webp", "https://incanto.eu/upload/webp/resize_cache/3a6/9999_1430_1/3a641016353addccd893ae6a57846c65.webp"],
//   "name": "Бюстгальтер с мягкими чашками на стане CD122",
//   "price": "2399",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 3,
//   "img": ["https://incanto.eu/upload/webp/resize_cache/bc8/9999_1430_1/0ab2gz59ietvpie4va804wr0dfxlz6e0.webp"],
//   "name": "Трусы с мягкими чашками на стане CD122 one two three possible possible impossible",
//   "price": "1959",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 4,
//   "img": ["https://i.pinimg.com/564x/44/83/fd/4483fd8b3001bfd20c3b83cf6cff8256.jpg", "https://incanto.eu/upload/webp/resize_cache/a98/9999_1430_1/a98ea051e7e7b9be27ce0498a6a05920.webp", "https://incanto.eu/upload/webp/resize_cache/ca1/9999_1430_1/ca1926b99e1710486c42bd128ab33e69.webp"],
//   "name": "Трусы с мягкими чашками на стане CD122",
//   "price": "2000",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 5,
//   "img": [ "https://incanto.eu/upload/webp/resize_cache/c27/9999_1430_1/clyx8xjmd1zpghm04q2oqvcp9ezoq178.webp", "https://incanto.eu/upload/webp/resize_cache/61f/9999_1430_1/dl21xb9gga1sluf5nbklxykz3mvgb4ql.webp", "https://incanto.eu/upload/webp/resize_cache/a08/9999_1430_1/5wz6zkoad4gpddqjdxocq75umf67oadl.webp"],
//   "name": "ТРусы с мягкими чашками на стане CD122",
//   "price": "1999",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 6,
//   "img": ["https://incanto.eu/upload/webp/resize_cache/274/9999_1430_1/27444e99f5772ea30856428bafc9bbba.webp","https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp"],
//   "name": "Трусы на стане CD122",
//   "price": "1999",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 7,
//   "img": ["https://incanto.eu/upload/webp/resize_cache/274/9999_1430_1/27444e99f5772ea30856428bafc9bbba.webp","https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp"],
//   "name": "Бюстгальтер с мягкими чашками на стане CD122",
//   "price": "1999",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 8,
//   "img": ["https://incanto.eu/upload/webp/resize_cache/86d/9999_1430_1/xt1tu6jem1ey2al27e2ppezzr6ltof1i.webp", "https://incanto.eu/upload/webp/resize_cache/f05/9999_1430_1/iqatjr262o3xtcg6vekv3t7cb5czm84d.webp"],
//   "name": "Бюстгальтер с мягкими чашками на стане CD122",
//   "price": "1999",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 9,
//   "img": ["https://incanto.eu/upload/webp/resize_cache/274/9999_1430_1/27444e99f5772ea30856428bafc9bbba.webp","https://incanto.eu/upload/webp/resize_cache/65d/9999_1430_1/2frdd9nvw5x1x6guz2pthuom9kqjd085.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp"],
//   "name": "Бюстгальтер с мягкими чашками на стане CD122",
//   "price": "1999",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 10,
//   "img": ["https://incanto.eu/upload/webp/resize_cache/274/9999_1430_1/27444e99f5772ea30856428bafc9bbba.webp","https://incanto.eu/upload/webp/resize_cache/9a8/9999_1430_1/5px93r4q3o3l036bybuluc4on25cvjuz.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp"],
//   "name": "Бюстгальтер с мягкими чашками на стане CD122",
//   "price": "1999",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 11,
//   "img": ["https://incanto.eu/upload/webp/resize_cache/b91/9999_1430_1/xhnf3c5neqvvo4okgk6hofcjlg4nuhb3.webp","https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp"],
//   "name": "Бюстгальтер с мягкими чашками на стане CD122",
//   "price": "1999",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 12,
//   "img": ["https://incanto.eu/upload/webp/resize_cache/9a8/9999_1430_1/5px93r4q3o3l036bybuluc4on25cvjuz.webp","https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp"],
//   "name": "Бюстгальтер с мягкими чашками на стане CD122",
//   "price": "1999",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 13,
//   "img": ["https://incanto.eu/upload/webp/resize_cache/274/9999_1430_1/27444e99f5772ea30856428bafc9bbba.webp","https://incanto.eu/upload/webp/resize_cache/90f/9999_1430_1/pn7a3rvd6z7tv6hdu7la2cj7p6bmlm1d.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp", "https://incanto.eu/upload/webp/resize_cache/65d/9999_1430_1/2frdd9nvw5x1x6guz2pthuom9kqjd085.webp"],
//   "name": "Бюстгальтер с мягкими чашками на стане CD122",
//   "price": "1999",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// },
// {
//   "id": 14,
//   "img": ["https://i.pinimg.com/564x/44/83/fd/4483fd8b3001bfd20c3b83cf6cff8256.jpg","https://incanto.eu/upload/webp/resize_cache/f05/9999_1430_1/iqatjr262o3xtcg6vekv3t7cb5czm84d.webp", "https://incanto.eu/upload/webp/resize_cache/183/9999_1430_1/drgiixhmak1kjbju1s520qvd27bo03sq.webp", "https://incanto.eu/upload/webp/resize_cache/65d/9999_1430_1/2frdd9nvw5x1x6guz2pthuom9kqjd085.webp"],
//   "name": "Бюстгальтер с мягкими чашками на стане CD122",
//   "price": "1999",
//   "description": "Бюстгальтер с мягкими чашками на стане. Чашки с вытачками формируют естественную линию декольте и обеспечивают деликатную поддержку груди. Состав: основной материал: 89% нейлон, 11% эластан; отделочный материал: 58% полиэстер, 36% нейлон, 6% люрекс Материал: сетка, вышивка"
// }

reportWebVitals();
