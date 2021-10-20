import React from 'react';

import styles from './Menu.module.scss';

const Menu = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className={styles.Menu}>
      <img alt="icon" src={`${path}/icons/toolbar/Align-Center.svg`} />
    </div>
  );
};

export default Menu;
