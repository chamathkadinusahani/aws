import React from 'react';
import styles from './Header.module.css';
import ContactInfo from './ContactInfo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ca610aae1153bc492f5420d304d38feca885c52836636fa5a4f30b313425d5f?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="ABC School Logo" className={styles.logo} />
        <h1 className={styles.schoolName}>Frithcode</h1>
      </div>
      <Navigation/>
      <ContactInfo />
      
    </header>
  );
};

export default Header;