import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './StudentBio.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const AttendanceChart = () => {
  const data = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [80, 20], // 80% green, 20% red
        backgroundColor: ['#c5c84f', '#ff0000'], // Green and Red colors
        hoverBackgroundColor: ['#b5b73f', '#e60000'], // Darker shades for hover effect
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },

  };

  return (
    <div className={styles.chartContainer}>
      <Pie data={data} options={options} />
      <div className={styles.chartOverlay}>
        <p className={styles.presentPercentage}>80%</p>
        <p className={styles.absentPercentage}>Present</p>
      </div>
    </div>
  );
};

export default AttendanceChart;
