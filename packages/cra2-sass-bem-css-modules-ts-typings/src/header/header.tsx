import React from 'react';
import * as styles from './header.module.scss';

export const Header = () => (
  <div className={styles.header}>
    This is my Header
    <p className={styles.headerCross}>EUR/USD</p>
    <p className={styles.headerCrossUpdated}>
      EUR/USD (On Update)
    </p>
  </div>
);

