import React from 'react';

import styles from './Main.module.scss';

function Main({ imgSrc }) {
  const path = process.env.PUBLIC_URL;
  return (
    <div className={styles.container}>
      <div className={styles.imgPreview}>
        <div className={styles.imgText}>Source</div>
        <div className={styles.imgUpload}>
          {imgSrc && imgSrc.length ? (
            <img src={imgSrc[0]} alt="Img" />
          ) : (
            <img src={`${path}/placeholder_image.png`} alt="placeholder Img" />
          )}
        </div>
      </div>
      <div className={styles.imgEdit}>
        <div className={styles.imgText}>Edit</div>
        <div className={styles.imgUpload}>
          {imgSrc && imgSrc.length ? (
            <img src={imgSrc[0]} alt="Img" />
          ) : (
            <img src={`${path}/placeholder_image.png`} alt="placeholder Img" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
