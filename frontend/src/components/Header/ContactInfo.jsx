import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <Link to="/contact">
    <button className={styles.contactButton}>Contact Us</button>
  </Link>
      <div className={styles.phoneContainer}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b52febf646652fb68d414640905bb27e82ba0a71235b9c912f298384fc689de4?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Phone icon" className={styles.phoneIcon} />
        <span className={styles.phoneNumber}>(011) 2345 567</span>
      </div>
    </div>
  );
};

export default ContactInfo;