import React from 'react';

import styles from './RightLayer.module.scss';

function RightLayer({ arrTexts }) {
  return (
    <div className={styles.container}>
      <div className={styles.textHeader}>Layer</div>
      <div className={styles.line} />
      {arrTexts.map((item, index) => (
        <div className={styles.inputContainer} key={item.index}>
          <span className={styles.index}>#{index + 1}</span>
          <input
            className={styles.input}
            type="text"
            value={item.description}
          />
        </div>
      ))}
    </div>
  );
}

export default RightLayer;
