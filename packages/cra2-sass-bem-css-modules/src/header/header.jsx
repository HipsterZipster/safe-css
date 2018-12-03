import React from 'react';
import * as styles from './header.module.scss';

export const Header = () => (
  <div className={styles.header}>
    This is my Header
    <p className={styles.header__cross}>EUR/USD</p>
    <p className={`${styles.header__cross} ${styles['-updated']}`}>
      EUR/USD (On Update)
    </p>
  </div>
);

// console.log(JSON.stringify(styles, null, '\t'));