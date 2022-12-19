import styles from './Footer.module.css';
import { SocialIcon } from 'react-social-icons';
import {WhatsAppOutlined, EnvironmentOutlined, MailOutlined} from '@ant-design/icons';


const Footer = () => {
  return (
    <div className={styles.footer} id="t1">
      <div className={styles.footerMain}>
        <div className={styles.footerLocation}>
          <div className={styles.item + " " + styles.locationTitle}>КОРСЕТЫ & ТОПЫ-БЮСТЬЕ</div>
          <div className={styles.items}><EnvironmentOutlined /><div className={styles.item + " " + styles.location}>г. Краснодар</div></div>
          <div className={styles.items}><WhatsAppOutlined /><div className={styles.item + " " + styles.locationNumber}>+79284020774</div></div>
          <div className={styles.items}><MailOutlined /><div className={styles.item + " " + styles.locationEmail}>annaknausshop@mail.ru</div></div>
        </div>
        <div className={styles.socialNetwork}>
          <div>@anna_knaus_</div>
          <div className={styles.socialIcons}>
            <SocialIcon url="https://vk.com"  style={{ height: 25, width: 25 }}  key="4" />
            <SocialIcon url="https://web.telegram.org/z/" style={{ height: 25, width: 25 }} key="2" />
            <SocialIcon url="https://instagram.com/anna_knaus_?igshid=YmMyMTA2M2Y=" style={{ height: 25, width: 25 }} key="3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
