import React from 'react';
import styles from './AdminDashboard.module.css';

const SidebarSection = ({ title, items }) => {
  return (
    <section className={styles[`${title.toLowerCase()}Section`]}>
      <h3 className={styles[`${title.toLowerCase()}Title`]}>{title}</h3>
      <ul className={styles[`${title.toLowerCase()}List`]}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default SidebarSection;