import React from 'react';
import styles from './AdminDashboard.module.css';
import StatCard from './StatCard';
import SidebarSection from './SidebarSelection';

const AdminDashboard = () => {
  const stats = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0e4214a0eee36add60a6e299aba4cacdb19d15bef4c3b39a6427cc515b09a462?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8', label: 'All registered students', value: '250' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ba5c67d7672aa79e8c0c7a272b832d3e73ca6f6c9072739d54a1a1ad7b2733d7?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8', label: 'New students', value: '150' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ba5c67d7672aa79e8c0c7a272b832d3e73ca6f6c9072739d54a1a1ad7b2733d7?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8', label: 'All registered teachers', value: '50' },
    { label: 'Payments', value: '' },
  ];

  return (
    <div className={styles.adminDashboard}>
      
      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <h2 className={styles.adminPanelTitle}>Admin Panel</h2>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee4efbaf37b34e1bb2ef3ed2ef99cd919c1012cad16ce14ebbf4453c6a21a6cf?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8" alt="Admin Avatar" className={styles.adminAvatar} />
            <p className={styles.adminInfo}>
              Team 1<br />
              Super Admin
            </p>
            <nav className={styles.dashboardLink}>Dashboard</nav>
          </div>
          <SidebarSection title="Data" items={['Managing Team', "Students' Info", "Teachers' Info", 'Invoices']} />
          <SidebarSection title="Pages" items={['Home Page', 'About Us', 'Register', 'Login']} />
          <SidebarSection title="Tasks" items={['Student Registration', 'Update student activation', 'Teacher Registration', 'Update teacher activation', 'Payment invoices']} />
          <SidebarSection title="Charts" items={['Student payments', 'Student active/deactive']} />
          <SidebarSection title="Databases" items={['Student database', 'Teacher database']} />
          <div className={styles.mailsSection}>Mails</div>
        </aside>
        <main className={styles.dashboardContent}>
          <div className={styles.dashboardHeader}>
            <h1 className={styles.dashboardTitle}>Dashboard</h1>
            <p className={styles.welcomeMessage}>Welcome to Admin page</p>
          </div>
          <div className={styles.statsContainer}>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
          <div className={styles.chartPlaceholder} />
          <div className={styles.smallChartPlaceholder} />
        </main>
    </div>
  </div>
);
};

export default AdminDashboard;