import React from 'react';
import HeaderAdmin from '../Components/HeaderAdmin/HeaderAdmin';
import styles from './CreateCart.module.css';

function CreateCart() {
  return (
    <div>
      <HeaderAdmin />
      <div className={styles.body}>
        <form className={styles.create}>
          <div className={styles.name}>Создание товара</div>

          <div className={styles.photosBody}>
            <div className={styles.titlePhotos}>
              Загрузите фотографии. Первая фотография является главной.
            </div>
            <div className={styles.photos}>
              <div className={styles.photo + ' ' + styles.photo1}> + </div>
              <div className={styles.photo + ' ' + styles.photo2}> + </div>
              <div className={styles.photo + ' ' + styles.photo3}> + </div>
              <div className={styles.photo + ' ' + styles.photo4}> + </div>
            </div>
          </div>
          <div className={styles.input + ' ' + styles.title}>
            <div className={styles.text}>Название:</div>
            <input placeholder="Женское белье"></input>
          </div>
          <div className={styles.input + ' ' + styles.price}>
            <div className={styles.text}>Цена в рублях:</div>
            <input placeholder="1499"></input>
          </div>
          <div className={styles.input + ' ' + styles.description}>
            <div className={styles.text}>Описание:</div>
            <textarea
              placeholder="Женское белье розового цвета, ткань: хлопок, размеры: s, m, xs, XL"
              rows="5"
              id="TITLE"
            ></textarea>
          </div>
          <div className={styles.input + ' ' + styles.is_active}>
            <div className={styles.text}>Товар в наличии?</div>
            <div className={styles.checkbox}>
              <input type="checkbox" name="happy" value="Да"></input>
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
