import styles from './Benefits.module.css';

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.benefitsPicture}></div>
      <div className={styles.benefitsBody}>
        <div className={styles.benefitsTitle}>ПРЕИМУЩЕСТВА</div>

        <div className={styles.benefitsItems}>
          <div className={styles.benefitsItem + ' ' + styles.benefitsReturn}>
            <div
              className={
                styles.benefitsItemPicture +
                ' ' +
                styles.benefitsItemPictureReturn
              }
            ></div>
            <div className={styles.benefitsItemTitle}>ЛЕГКИЙ ВОЗВРАТ</div>
          </div>

          <div className={styles.benefitsItem + ' ' + styles.benefitsMaterial}>
            <div
              className={
                styles.benefitsItemPicture +
                ' ' +
                styles.benefitsItemPictureMaterial
              }
            ></div>
            <div className={styles.benefitsItemTitle}>
              КАЧЕСТВЕННЫЙ МАТЕРИАЛ
            </div>
          </div>

          <div className={styles.benefitsItem + ' ' + styles.benefitsPackage}>
            <div
              className={
                styles.benefitsItemPicture +
                ' ' +
                styles.benefitsItemPictureIcon
              }
            ></div>
            <div className={styles.benefitsItemTitle}>ПРЕМИУМ УПАКОВКА</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Benefits;
