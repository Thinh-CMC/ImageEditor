import React from 'react';

import styles from './Main.module.scss';

function Main() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className={styles.container}>
      <div className={styles.imgPreview}>
        <div className={styles.imgText}>Source</div>
        <img
          className={styles.img}
          src={`${path}/placeholder_image.png`}
          alt="placeholder Img"
        />
      </div>
      <div className={styles.imgPreview}>
        <div className={styles.imgText}>Edit</div>
        <img
          className={styles.img}
          src={`${path}/placeholder_image.png`}
          alt="placeholder Img"
        />
      </div>
    </div>
  );
}

export default Main;
