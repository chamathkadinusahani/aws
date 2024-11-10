import React from "react";
import styles from './AdminDashboard.module.css';

function Sidebar() {
  const menuItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/497d951f9913c41c3161126149534d6cd6fdb653bcfe49d28941f651e389ae7b?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "Managing Team" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/618a72c55ab9cc97942931e461e718c6928de4b2069c30f367678acf925ef704?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "Students' Info" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f74ced5e287140c9ea8cf9380710d9acc6953029e042e4090958ca1efb3f0f3?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "Teachers' Info" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ef2f5bd0bf881fb9cfa8651cc591d52aa445dc65426f2ece4950f7f33964a59?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "Invoices" }
  ];

  const pageItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ef2f5bd0bf881fb9cfa8651cc591d52aa445dc65426f2ece4950f7f33964a59?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "Home Page" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11e1afcf30c40dccf401a38e4e07524e7f59d43f630820b01dba1ec5de8b3f66?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "About Us" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11e1afcf30c40dccf401a38e4e07524e7f59d43f630820b01dba1ec5de8b3f66?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "Register" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/11e1afcf30c40dccf401a38e4e07524e7f59d43f630820b01dba1ec5de8b3f66?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "Login" }
  ];

  const taskItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/08d7245a59b48b758dac91a4daa0b2ce71ed4c9fe3bd52613d5c2067c32b9835?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "Student Registration" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/08d7245a59b48b758dac91a4daa0b2ce71ed4c9fe3bd52613d5c2067c32b9835?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "Update student activation" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/08d7245a59b48b758dac91a4daa0b2ce71ed4c9fe3bd52613d5c2067c32b9835?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "Teacher Registration" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/08d7245a59b48b758dac91a4daa0b2ce71ed4c9fe3bd52613d5c2067c32b9835?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "Update teacher activation" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/08d7245a59b48b758dac91a4daa0b2ce71ed4c9fe3bd52613d5c2067c32b9835?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29", label: "Payment invoices" }
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.adminInfo}>
        <h3 className={styles.adminPanel}>Admin Panel</h3>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b5c6c3c26f68402e48fe26a7ff182882e231d929b1935baec536c0a5fda0a89?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29" alt="Admin avatar" className={styles.adminAvatar} />
        <p className={styles.adminRole}>
          Team 1<br />
          Super Admin
        </p>
        <p className={styles.dashboardLabel}>Dashboard</p>
      </div>
      <nav className={styles.sidebarNav}>
        <section className={styles.menuSection}>
          <h4 className={styles.sectionTitle}>Data</h4>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <img src={item.icon} alt={item.label} className={styles.menuIcon} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.menuSection}>
          <h4 className={styles.sectionTitle}>Pages</h4>
          <ul className={styles.menuList}>
            {pageItems.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <img src={item.icon} alt={item.label} className={styles.menuIcon} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.menuSection}>
          <h4 className={styles.sectionTitle}>Tasks</h4>
          <ul className={styles.menuList}>
            {taskItems.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <img src={item.icon} alt={item.label} className={styles.menuIcon} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.menuSection}>
          <h4 className={styles.sectionTitle}>Charts</h4>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b60ae3dd7f56288c1c829a2b44df9688c974e73aedc5e6725553a8d5439316c?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29" alt="Student payments" className={styles.menuIcon} />
              <span>Student payments</span>
            </li>
            <li className={styles.menuItem}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cdd362f86540cbcd29ff57a325db6eda71761539af2174e97d85af5664cba28?placeholderIfAbsent=true&apiKey=062bf5284e86486ca62faf7129d40d29" alt="Student active/deactive" className={styles.menuIcon} />
              <span>Student active/deactive</span>
            </li>
          </ul>
        </section>
        <section className={styles.menuSection}>
          <h4 className={styles.sectionTitle}>Databases</h4>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Student database</li>
            <li className={styles.menuItem}>Teacher database</li>
          </ul>
        </section>
        <section className={styles.menuSection}>
          <h4 className={styles.sectionTitle}>Mails</h4>
        </section>
      </nav>
    </aside>
  );
}

export default Sidebar;