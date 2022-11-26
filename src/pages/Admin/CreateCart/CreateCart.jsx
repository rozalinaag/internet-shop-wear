import React from 'react';
import HeaderAdmin from '../Components/HeaderAdmin/HeaderAdmin';
import styles from './CreateCart.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function CreateCart() {
  const [photo1, setPhoto1] = useState();
  const [photo2, setPhoto2] = useState();
  const [photo3, setPhoto3] = useState();
  const [photo4, setPhoto4] = useState();
  const [photos, setPhotos] = useState([{}]);
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [is_active, setIs_active] = useState(true);
  const [inputCode, setInputCode] = useState('');
  const [fetching, setFetching] = useState(true);

  const onImageChange1 = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPhoto1([URL.createObjectURL(img)]);
    }
  };
  const onImageChange2 = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPhoto2([URL.createObjectURL(img)]);
    }
  };
  const onImageChange3 = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPhoto3([URL.createObjectURL(img)]);
    }
  };
  const onImageChange4 = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPhoto4([URL.createObjectURL(img)]);
    }
  };
  const handlerInputName = (event) => {
    setInputName(event.target.value);
  };
  const handlerInputPrice = (event) => {
    setInputPrice(event.target.value);
  };
  const handlerInputCode = (event) => {
    setInputCode(event.target.value);
  };
  const handlerInputDescription = (event) => {
    setInputDescription(event.target.value);
  };

  const handlertIs_active = () => {
    setIs_active(!is_active);
  };

  const handlerCreateCart = (event) => {
    event.preventDefault();
    setPhotos([photo1]);
    let data = {
      files: photos,
      name: inputName,
      price: inputPrice,
      description: inputDescription,
      is_active: is_active,
    };
    if (fetching) {
      console.log(data);
      axios
        .post(process.env.REACT_APP_HOST + `/api/article/create`, { data })
        .then((response) => {
          console.log(response);
        })
        .finally(() => setFetching(false));
    }
  };

  return (
    <div>
      <HeaderAdmin />
      <div className={styles.body}>
        <form className={styles.create} onSubmit={handlerCreateCart}>
          <div className={styles.name}>Создание товара</div>

          <div className={styles.photosBody}>
            <div className={styles.titlePhotos}>
              Загрузите фотографии. Первая фотография является главной.
            </div>
            <div className={styles.files}>
              <div className={styles.file}>
                <span>1. </span>
                <input type="file" name="myImage" onChange={onImageChange1} />
              </div>
              <div className={styles.file}>
                <span>2.</span>
                <input type="file" name="myImage" onChange={onImageChange2} />
              </div>
              <div className={styles.file}>
                <span>3. </span>
                <input type="file" name="myImage" onChange={onImageChange3} />
              </div>
              <div className={styles.file}>
                <span>4. </span>
                <input type="file" name="myImage" onChange={onImageChange4} />
              </div>
            </div>
            <div className={styles.photos}>
              <div className={styles.photo + ' ' + styles.photo1}>
                <img width="80" height="100" src={photo1} alt=""></img>
              </div>
              <div className={styles.photo + ' ' + styles.photo2}>
                {' '}
                <img width="80" height="100" src={photo2} alt=""></img>{' '}
              </div>
              <div className={styles.photo + ' ' + styles.photo3}>
                {' '}
                <img width="80" height="100" src={photo3} alt=""></img>
              </div>
              <div className={styles.photo + ' ' + styles.photo4}>
                {' '}
                <img width="80" height="100" src={photo4} alt=""></img>
              </div>
            </div>
          </div>
          <div className={styles.input + ' ' + styles.title}>
            <div className={styles.text}>Название:</div>
            <input
              placeholder="Женское белье"
              onChange={handlerInputName}
            ></input>
          </div>
          <div className={styles.input + ' ' + styles.price}>
            <div className={styles.text}>Цена в рублях:</div>
            <input placeholder="1499" onChange={handlerInputPrice}></input>
          </div>

          <div className={styles.input + ' ' + styles.price}>
            <div className={styles.text}>Код товара:</div>
            <input placeholder="12345" onChange={handlerInputCode}></input>
          </div>

          <div className={styles.input + ' ' + styles.description}>
            <div className={styles.text}>Описание:</div>
            <textarea
              placeholder="Женское белье розового цвета, ткань: хлопок, размеры: s, m, xs, XL"
              rows="5"
              id="TITLE"
              onChange={handlerInputDescription}
            ></textarea>
          </div>
          <div className={styles.input + ' ' + styles.is_active}>
            <div className={styles.text}>Товар в наличии?</div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="happy"
                checked={is_active}
                onChange={handlertIs_active}
              ></input>
              <div>Да</div>
            </div>
          </div>
          <button className={styles.buttonAdd}>Добавить</button>
        </form>
      </div>
    </div>
  );
}

export default CreateCart;
