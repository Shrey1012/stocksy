import React from 'react'
import styles from './Input.module.css';

const Input = () => {
  return (
        <div>
        <div className={styles.phone}>
          <span className={styles.text3}>Enter Phone No.</span>
        </div>
        <div className={styles.link}>
          <span className={styles.text4}>Get Link</span>
        </div>
      </div>
  )
}

export default Input