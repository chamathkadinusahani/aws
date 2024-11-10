import React from "react";
import styles from './AdminDashboard.module.css';

function StudentLogin() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const barHeights = [126, 115, 90, 57, 65, 93, 49];

  return (
    <section className={styles.studentLogin}>
      <h2 className={styles.chartTitle}>Students' login</h2>
      <p className={styles.chartSubtitle}>This week</p>
      <div className={styles.barChartContainer}>
        <div className={styles.yAxis}>
          <span>400</span>
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>
        <div className={styles.barChart}>
          {barHeights.map((height, index) => (
            <div key={index} className={styles.barColumn}>
              <div className={styles.bar} style={{height: `${height}px`}} />
              <span className={styles.xAxisLabel}>{days[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentLogin;