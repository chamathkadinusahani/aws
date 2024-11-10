import React from "react";
import styles from './AdminDashboard.module.css';

function StudentActivation() {
  return (
    <section className={styles.studentActivation}>
      <h2 className={styles.chartTitle}>Students' activation</h2>
      <div className={styles.chartContainer}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a94906e5fbd6f054e00f85eace4e9c8341f1fb8a6db3f1ece76031350757fc48?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29" alt="Student activation chart background" className={styles.chartBackground} /><br></br>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf3da85ecb83ff3fe9d1679242961cc27dbade81b00b88bd4308e27ab885167e?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29" alt="Student activation chart" className={styles.chartImage} />
      </div>
      <div className={styles.chartLegend}>
        <h3 className={styles.legendTitle}>This week</h3>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{backgroundColor: "#140C73"}} />
          <div className={styles.legendText}>
            <p>Sent mail to registered</p>
            <p className={styles.legendCount}>120</p>
          </div>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{backgroundColor: "#66ABD7"}} />
          <div className={styles.legendText}>
            <p>Paid for register</p>
            <p className={styles.legendCount}>85</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentActivation;