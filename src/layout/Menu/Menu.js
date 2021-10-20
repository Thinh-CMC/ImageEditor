import React, { useState } from 'react';

import styles from './Menu.module.scss';

const Menu = () => {
  const [active, _setActive] = useState('select');
  const MenutItem = [
    { icon: 'Select', label: 'select' },
    { icon: 'TextSelect', label: 'Text select' },
    { icon: 'Rectangle', label: 'Rectangle' },
    { icon: 'Text', label: 'Text' },
    { icon: 'Pen', label: 'pen' },
    { icon: 'Stamp', label: 'stamp' },
    { icon: 'Eraser', label: 'eraser' },
    { icon: 'Layer', label: 'layer' },
    { icon: 'Folder', label: 'folder' },
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
