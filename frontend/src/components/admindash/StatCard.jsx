import React from 'react';
import styles from './AdminDashboard.module.css';

const StatCard = ({ icon, label, value }) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.statContent}>
        {icon && <img src={icon} alt="" className={styles.statIcon} />}
        <div className={styles.statLabel}>{label}</div>
      </div>
      {value && <div className={styles.statValue}>{value}</div>}
    </div>
  );
};

export default StatCard;