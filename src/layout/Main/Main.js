/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Text, Image } from 'react-konva';
import useImage from 'use-image';
import styles from './Main.module.scss';

const EditImage = ({ src }) => {
  const [image] = useImage(src);
  const s = 515 / (image?.width ?? 0);
  const height = (image?.height ?? 0) * s;
  return (
    <Stage width={515} height={height}>
      <Layer>
        <div>
          <Image
            image={image}
            scale={{
              x: s,
              y: s,
            }}
          />
        </div>
      </Layer>
    </Stage>
  );
};

function Main({ imgSrc }) {
  const path = process.env.PUBLIC_URL;

  const imageSrc =
    imgSrc && imgSrc.length ? imgSrc[2] : `${path}/placeholder_image.png`;
  return (
    <div className={styles.container}>
      <div className={styles.imgPreview}>
        <div className={styles.imgText}>Source</div>
        <div className={styles.imgUpload}>
          <EditImage src={imageSrc} />
        </div>
      </div>
      <div className={styles.imgEdit}>
        <div className={styles.imgText}>Edit</div>
        <div className={styles.imgUpload}>
          <EditImage src={imageSrc} />
        </div>
      </div>
    </div>
  );
}

export default Main;
