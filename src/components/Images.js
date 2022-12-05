import React from 'react'
import logo from './../assets/logo.png'
import img1 from './../assets/1.png';
import img2 from './../assets/5.png';
import img3 from './../assets/6.png';
import illustration from './../assets/illustration.png'
import styles from './Images.module.css';

const Images = () => {
  return (
    <div>
        <img src={logo} className={styles.logo} alt='logo' />
        <img src={illustration} className={styles.illustration} alt='illustration' />
        <img src={img1} className={styles.img1} alt='img1' />
        <img src={img2} className={styles.img2} alt='img2' />
        <img src={img3} className={styles.img3} alt='img3' />
    </div>
  )
}

export default Images