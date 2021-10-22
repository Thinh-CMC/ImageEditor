import axios from 'axios';
import React, { useEffect, useState } from 'react';

import styles from './Main.module.scss';

function Main() {
  const path = process.env.PUBLIC_URL;
  const [imgSrc, setstate] = useState([]);

  useEffect(() => {
    axios
      .get(
        'http://52.78.18.151:8001/tool_episode/ada3628a-da95-41e3-abab-33706a15af0c',
        {
          headers: {
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGZjZDE3YzktMGIzNC00MDg5LWFlNDMtMmEzOTJjNzUxM2U3IiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNjM0OTE1MzA5fQ.6T8TNn2unMMucPnKMSZKqrMgBevQtJIrBtRku3iHc5E',
          },
        },
      )
      .then((res) => {
        setstate(res.data.data[0].image_list);
      });
  }, []);

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
