import React from 'react';
import styles from './StudentBio.module.css';

function Navigation() {
  const navItems = ['Home', 'Course Details', 'Student Bio', 'Payments', 'Login'];

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <a href="#" className={styles.navLink}>{item}</a>
          </li>
        ))}
      </ul>
      <div className={styles.activeIndicator} />
    </nav>
  );
}

export default Navigation;