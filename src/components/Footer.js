import React from "react";
import styles from "./Footer.module.css";
import linkedin from "./../assets/linkedin.png";
import twitter from "./../assets/twitter.png";
import insta from "./../assets/insta.png";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Privacy Policy</p>
      <p className={styles.text}>Terms & Conditions</p>
      <p className={styles.text}>© Copyright ©2021 All rights reserved</p>
      <div className={styles.icons}>
        <span className={styles.imgWrapper1} />
        <img src={linkedin} className={styles.img} alt="linkedin" />
        <span className={styles.imgWrapper2} />
        <img src={insta} className={styles.img} alt="insta" />
        <span className={styles.imgWrapper3} />
        <img src={twitter} className={styles.img} alt="twitter" />
      </div>
    </div>
  );
};

export default Footer;
