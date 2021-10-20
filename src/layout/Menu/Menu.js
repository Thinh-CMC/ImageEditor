import React, { useState } from 'react';

import styles from './Menu.module.scss';

const Menu = () => {
  const [active, _setActive] = useState('select');
  const MenutItem = [
    { icon: 'Eraser', label: 'eraser' },
    { icon: 'Folder', label: 'folder' },
    { icon: 'Layer', label: 'layer' },
    { icon: 'Pen', label: 'pen' },
    { icon: 'Rectangle', label: 'Rectangle' },
    { icon: 'Select', label: 'select' },
    { icon: 'Stamp', label: 'stamp' },
    { icon: 'TextSelect', label: 'Text select' },
  ];

  const path = process.env.PUBLIC_URL;
  const menuitemelement = MenutItem.map((item) => (
    <div
      key={`${item.label}`}
      onClick={() => {
        _setActive(item.label);
      }}
      className={`${styles.MenuItem} ${
        active === item.label ? styles.MenuItemActive : ''
      }`}
    >
      <img
        alt="icon"
        src={`${path}/icons/menu/${
          active === item.label ? `${item.icon}-Active` : item.icon
        }.svg`}
      />
      <label className={styles.MenuItemText}>{item.label}</label>
    </div>
  ));
  return <div className={styles.Menu}>{menuitemelement}</div>;
};

export default Menu;
