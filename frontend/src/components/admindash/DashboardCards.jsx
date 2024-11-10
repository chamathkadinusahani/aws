import React from "react";
import styles from './AdminDashboard.module.css';

function DashboardCard({ icon, title, count }) {
  return (
    <div className={styles.dashboardCard}>
      <img src={icon} alt={title} className={styles.cardIcon} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardCount}>{count}</p>
      </div>
    </div>
  );
}

function DashboardCards() {
  const cardData = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e4214a0eee36add60a6e299aba4cacdb19d15bef4c3b39a6427cc515b09a462?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", title: "All registered students", count: 250 },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba5c67d7672aa79e8c0c7a272b832d3e73ca6f6c9072739d54a1a1ad7b2733d7?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", title: "New students", count: 150 },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba5c67d7672aa79e8c0c7a272b832d3e73ca6f6c9072739d54a1a1ad7b2733d7?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", title: "All registered teachers", count: 50 },
    {  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba5c67d7672aa79e8c0c7a272b832d3e73ca6f6c9072739d54a1a1ad7b2733d7?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29",title: "Payments", count: null }
  ];

  return (
    <section className={styles.dashboardCardsContainer}>
      {cardData.map((card, index) => (
        <DashboardCard key={index} icon={card.icon} title={card.title} count={card.count} />
      ))}
    </section>
  );
}

export default DashboardCards;