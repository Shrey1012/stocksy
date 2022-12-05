import React from "react";
import styles from "./Text.module.css";

const Text = () => {
  return (
    <div>
      <span className={styles.text}>
        Learn and Earn from Stock Market with Fun
      </span>
      <span className={styles.text}>Launching STOCKSY App (beta version)</span>
      <div className={styles.text2}>Get Early Access</div>
    </div>
  );
};

export default Text;
