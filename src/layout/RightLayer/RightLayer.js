import React from 'react';

import styles from './RightLayer.module.scss';

function RightLayer({ textArrays }) {
  return (
    <div className={styles.container}>
      <div className={styles.textHeader}>Layer</div>
    </div>
  );
}

export default RightLayer;
