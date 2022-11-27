import React from 'react';
import HeaderAdmin from '../Components/HeaderAdmin/HeaderAdmin';
import styles from './CreateCart.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Children } from 'react';

function CreateCart() {
  const [photo1, setPhoto1] = useState();
  const [photo2, setPhoto2] = useState();
  const [photo3, setPhoto3] = useState();
  const [photo4, setPhoto4] = useState();
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [is_active, setIs_active] = useState(true);
  const [inputCode, setInputCode] = useState('');
  const [fetching, setFetching] = useState(true);
  const [correctData, setCorrectData] = useState({
    photos: false,
    name: false,
    price: false,
    code: false,
    description: false,
  });

  const onImageChange1 = (event) => {
    let fileInput = event.target;
    if (fileInput.files && fileInput.files[0]) {
      setPhoto1(fileInput.files[0]);
      setCorrectData({
        photos: true,
        name: correctData.name,
        price: correctData.price,
        code: correctData.code,
        description: correctData.description,
      });
    }
  };
  const onImageChange2 = (event) => {
    let fileInput = event.target;
    if (fileInput.files && fileInput.files[0]) {
      setPhoto2(fileInput.files[0]);
    }
  };
  const onImageChange3 = (event) => {
    let fileInput = event.target;
    if (fileInput.files && fileInput.files[0]) {
      setPhoto3(fileInput.files[0]);
    }
  };
  const onImageChange4 = (event) => {
    let fileInput = event.target;
    if (fileInput.files && fileInput.files[0]) {
      setPhoto4(fileInput.files[0]);
    }
  };
  const handlerInputName = (event) => {
    setInputName(event.target.value);
    if (event.target.value > '') {
      setCorrectData({
        photos: correctData.photos,
        name: true,
        price: correctData.price,
        code: correctData.code,
        description: correctData.description,
      });
    } else {
      setCorrectData({
        photos: correctData.photos,
        name: false,
        price: correctData.price,
        code: correctData.code,
        description: correctData.description,
      });
    }
  };
  const handlerInputPrice = (event) => {
    let price = event.target.value;
    setInputPrice(price);
    if (price > '') {
      setCorrectData({
        photos: correctData.photos,
        name: correctData.name,
        price: true,
        code: correctData.code,
        description: correctData.description,
      });
    } else {
      setCorrectData({
        photos: correctData.photos,
        name: correctData.name,
        price: false,
        code: correctData.code,
        description: correctData.description,
      });
    }
  };
  const handlerInputCode = (event) => {
    setInputCode(event.target.value);
    if (event.target.value > '') {
      setCorrectData({
        photos: correctData.photos,
        name: correctData.name,
        price: correctData.price,
        code: true,
        description: correctData.description,
      });
    } else {
      setCorrectData({
        photos: correctData.photos,
        name: correctData.name,
        price: correctData.price,
        code: false,
        description: correctData.description,
      });
    }
  };
  const handlerInputDescription = (event) => {
    setInputDescription(event.target.value);
    if (event.target.value > '') {
      setCorrectData({
        photos: correctData.photos,
        name: correctData.name,
        price: correctData.price,
        code: correctData.code,
        description: true,
      });
    } else {
      setCorrectData({
        photos: correctData.photos,
        name: correctData.name,
        price: correctData.price,
        code: correctData.code,
        description: false,
      });
    }
  };

  const handlertIs_active = () => {
    setIs_active(!is_active);
  };

  const handlerCreateCart = (event) => {
    event.preventDefault();
    let photos = [photo1, photo2, photo3, photo4];
    let formData = new FormData();
    for (let i = 0; i < photos.length; ++i) {
      if (photos[i] instanceof File) {
        formData.append('upload_file', photos[i]);
      }
    }
    formData.append('name', inputName);
    formData.append('price', inputPrice);
    formData.append('code', inputCode);
    formData.append('description', inputDescription);
    formData.append('is_active', is_active);

    console.log(correctData);

    if (
      fetching &&
      correctData.photos &&
      correctData.code &&
      correctData.name &&
      correctData.price &&
      correctData.description
    ) {
      setFetching(false);
      axios({
        method: 'POST',
        url: process.env.REACT_APP_HOST + `/api/article/create`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          console.log(response);
        })
        .finally(() => setFetching(true));
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
                <input
                  type="file"
                  name="myImage"
                  accept=".jpg, .png, .jpeg "
                  onChange={onImageChange1}
                />
              </div>
              <div className={styles.file}>
                <span>2.</span>
                <input
                  type="file"
                  name="myImage"
                  accept=".jpg, .png, .jpeg"
                  disabled={photo1 != undefined ? false : true}
                  onChange={onImageChange2}
                />
              </div>
              <div className={styles.file}>
                <span>3. </span>
                <input
                  type="file"
                  name="myImage"
                  accept=".jpg, .png, .jpeg "
                  disabled={photo2 ? false : true}
                  onChange={onImageChange3}
                />
              </div>
              <div className={styles.file}>
                <span>4. </span>
                <input
                  type="file"
                  name="myImage"
                  accept=".jpg, .png, .jpeg "
                  disabled={photo3 ? false : true}
                  onChange={onImageChange4}
                />
              </div>
            </div>
            <div className={styles.photos}>
              <div className={styles.photo + ' ' + styles.photo1}>
                <img
                  width="80"
                  height="100"
                  src={photo1 ? URL.createObjectURL(photo1) : photo1}
                  alt=""
                ></img>
              </div>
              <div className={styles.photo + ' ' + styles.photo2}>
                {' '}
                <img
                  width="80"
                  height="100"
                  src={photo2 ? URL.createObjectURL(photo2) : photo2}
                  alt=""
                ></img>{' '}
              </div>
              <div className={styles.photo + ' ' + styles.photo3}>
                {' '}
                <img
                  width="80"
                  height="100"
                  src={photo3 ? URL.createObjectURL(photo3) : photo3}
                  alt=""
                ></img>
              </div>
              <div className={styles.photo + ' ' + styles.photo4}>
                {' '}
                <img
                  width="80"
                  height="100"
                  src={photo4 ? URL.createObjectURL(photo4) : photo4}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className={styles.input + ' ' + styles.title}>
            <div className={styles.text}>Название:</div>
            <input
              placeholder="Введите название"
              onChange={handlerInputName}
            ></input>
          </div>
          <div className={styles.input + ' ' + styles.price}>
            <div className={styles.text}>Цена в рублях:</div>
            <input
              type="number"
              placeholder="0"
              onChange={handlerInputPrice}
            ></input>
          </div>

          <div className={styles.input + ' ' + styles.price}>
            <div className={styles.text}>Код товара:</div>
            <input
              placeholder="Введите код товара"
              onChange={handlerInputCode}
            ></input>
          </div>

          <div className={styles.input + ' ' + styles.description}>
            <div className={styles.text}>Описание:</div>
            <textarea
              placeholder="Введите описание"
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
