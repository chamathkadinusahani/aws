import React from "react";
import styles from './AdminDashboard.module.css';
import Sidebar from './Sidebar';
import DashboardCards from './DashboardCards';
import StudentActivation from './StudentActivation';
import StudentLogin from './StudentLogin';
import StudentRegistration from './StudentRegistration';

function AdminDashboard() {
  return (
    <div className={styles.adminDashboard}>
     
      <main className={styles.mainContent}>
        <Sidebar />
        <section className={styles.dashboardContent}>
          <h1 className={styles.dashboardTitle}>Dashboard</h1>
          <p className={styles.welcomeMessage}>Welcome to Admin page</p>
          <DashboardCards />
          <div className={styles.chartsContainer}>
            <StudentActivation />
            <StudentLogin />
          </div>
          <StudentRegistration />
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;