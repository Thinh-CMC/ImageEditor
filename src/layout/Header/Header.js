import React from 'react';

import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerIcon} />
      <div className={styles.headerText}>File</div>
      <div className={styles.headerText}>Edit</div>
    </div>
  );
}

export default Header;
