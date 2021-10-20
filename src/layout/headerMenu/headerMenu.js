import React from 'react';

import styles from './headerMenu.module.scss';

function HeaderMenu() {
  return (
    <div className={styles.headerMenu}>
      <span className={styles.fileName}>filename.jpg</span>
    </div>
  );
}

export default HeaderMenu;
