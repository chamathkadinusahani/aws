import React from "react";
import styles from './AdminDashboard.module.css';

function StudentRegistration() {
  const years = ['2003', '2006', '2009', '2012', '2014', '2017', '2020', '2023'];

  return (
    <section className={styles.studentRegistration}>
      <h2 className={styles.chartTitle}>Students' Registration</h2>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/66669836fe1b6254004c0b656029de355e1963a90c23d05cbfa8afc0bccaf0e1?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29" alt="Student registration chart" className={styles.registrationChart} />
      <hr className={styles.chartDivider} />
      <div className={styles.yearLabels}>
        {years.map((year, index) => (
          <span key={index} className={styles.yearLabel}>{year}</span>
        ))}
      </div>
    </section>
  );
}

export default StudentRegistration;