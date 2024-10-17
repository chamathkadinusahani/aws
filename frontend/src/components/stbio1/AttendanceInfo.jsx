import React from 'react';
import styles from './StudentBio.module.css';

function Attendance() {
  return (
    <section className={styles.attendance}>
      <h2>Attendance</h2>
      <div className={styles.attendanceContent}>
        <div className={styles.attendanceChart}>
          <p>Total Days : 100</p>
          <div className={styles.chartContainer}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a764ad870608436e1ff5215e1f890f55781da4f99eba49064fe185744e5af7db?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8" className={styles.chartImage} alt="Attendance chart showing 80% present" />
            <span className={styles.presentPercentage}>80 %</span>
            <span className={styles.absentPercentage}>20 %</span>
          </div>
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <span className={styles.presentColor}></span>
              <span>Days Present</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.absentColor}></span>
              <span>Days Absent</span>
            </div>
          </div>
        </div>
        <div className={styles.attendanceStatus}>
          <div className={styles.statusBox}>
            <h3>Attendance Status</h3>
            <p className={styles.statusGood}>
              <span className={styles.statusIndicator}></span>
              Good
            </p>
          </div>
          <h4>Attendance status</h4>
          <ul className={styles.statusLegend}>
            <li>Days Present &gt;= 90% -&gt; Perfect</li>
            <li>Days Present &gt;= 75% -&gt; Good</li>
            <li>Days Present &gt;= 50% -&gt; Average</li>
            <li>Days Present &gt;= 35% -&gt; Bad</li>
            <li>Days Present &lt; 35% -&gt; Very Bad</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Attendance;