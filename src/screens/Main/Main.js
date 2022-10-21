import styles from './Main.module.css';
import Icon, { DownOutlined } from '@ant-design/icons';
import Cart from '../../components/Cart/Cart';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.catalog}>
        <div className={styles.items}>
          <div className={styles.item}>
            <Cart/>
          </div>
          <div className={styles.item}>
              <Cart/>
          </div>
          <div className={styles.item}>
              <Cart/>
          </div>
        </div>
      </div>
      <p><a name="top"></a></p> 
    </div>
  );
};

export default Main;
