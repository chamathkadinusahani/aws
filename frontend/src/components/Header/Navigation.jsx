import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navigationItems = [
  <Link to="/Home" className={styles.navItem}>Home</Link>,
  <Link to="/AboutUs" className={styles.navItem}>About Us</Link>,
  <Link to="/Register88" className={styles.navItem}>Register</Link>,
  <Link to="/Login1" className={styles.navItem}>Login</Link>,
];

const Navigation = () => {
  return (
    <motion.nav className={styles.navigation}>
      {navigationItems.map((item, index) => (
        <div key={index}>{item}</div> // Use a div instead of a button
      ))}
    </motion.nav>
  );
};

export default Navigation;
