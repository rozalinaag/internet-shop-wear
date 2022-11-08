import styles from './Footer.module.css';
import { SocialIcon } from 'react-social-icons';
import {WhatsAppOutlined, EnvironmentOutlined, MailOutlined} from '@ant-design/icons';


const Footer = () => {
  return (
    <div className={styles.footer} id="t1">
      <div className={styles.footerMain}>
        <div className={styles.footerLocation}>
          <div className={styles.item + " " + styles.locationTitle}>Магазин нижнего белья</div>
          <div className={styles.items}><EnvironmentOutlined /><div className={styles.item + " " + styles.location}>г. Краснодар, улица Головатого 30</div></div>
          <div className={styles.items}><WhatsAppOutlined /><div className={styles.item + " " + styles.locationNumber}>89002500105</div></div>
          <div className={styles.items}><MailOutlined /><div className={styles.item + " " + styles.locationEmail}>lingeria@mail.ru</div></div>
        </div>
        <div className={styles.socialNetwork}>
          <div>@lingeria</div>
          <div className={styles.socialIcons}>
            <SocialIcon url="https://vk.com"  style={{ height: 25, width: 25 }}  key="1" />
            <SocialIcon url="https://web.telegram.org/z/" style={{ height: 25, width: 25 }} key="2" />
            <SocialIcon url="https://www.instagram.com/" style={{ height: 25, width: 25 }} key="3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
