import React from 'react'
import styles from './Body.module.css';
import mail from './../assets/mail.png';
import Images from './Images';
import Text from './Text';
import Input from './Input';
import Footer from './Footer';

const Body = () => {
  return (
    <div>
        <Images/>
        <div className={styles.backGradient}/>
        <Text/>
        <Input/>
        <div>
            <span className={styles.contact}>Contact</span>
            <img src={mail} className={styles.mail} alt='mail'/>
            <span className={styles.email}> hello@stocksy.app </span>
        </div>
        <Footer/>
        </div>
  )
}

export default Body