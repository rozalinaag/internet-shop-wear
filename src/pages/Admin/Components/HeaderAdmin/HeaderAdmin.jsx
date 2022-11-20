import React from 'react'
import styles from './HeaderAdmin.module.css';
import { Link } from 'react-router-dom';

function HeaderAdmin() {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
          <div className={styles.text + " " + styles.title}>
            Администрирование
          </div>
          <div className={styles.tools}>
              <Link to="/admin/showitems"  className={styles.tool + " " + styles.show}>Все товары</Link>
              <Link to="/admin/create" className={styles.tool + " " + styles.show}>Создать</Link>
          </div>
      </div>
    </div>
  )
}

export default HeaderAdmin;
