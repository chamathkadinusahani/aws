import React from 'react';
import styles from './StudentBio.module.css';

function AdditionalInfo() {
  const infoTabs = ['Personal Information', 'Contact Information', 'Academic Information', 'Payment Information', 'Additional Information'];
  const activities = [
    { name: 'Senior Western Boys Band', role: 'Deputy leader' },
    { name: 'Choir', role: 'Member' }
  ];
  const achievements = [
    'All- Island inter school music competition - 2017 - 2nd place',
    'All- Island inter school music competition - 2018 - 1st place',
    'Participate \'Prashasithi\' concert.',
    'All- Island inter school choir competition - 2020 - 2nd place'
  ];

  return (
    <section className={styles.additionalInfo}>
      <nav className={styles.infoTabs}>
        {infoTabs.map((tab, index) => (
          <button key={index} className={`${styles.tabButton} ${index === 4 ? styles.activeTab : ''}`}>
            {tab}
          </button>
        ))}
      </nav>
      <div className={styles.infoContent}>
        <h3 className={styles.sectionTitle}>Extracurricular Activities:</h3>
        <div className={styles.activitiesContainer}>
          <div className={styles.activities}>
            <h4>Activity</h4>
            {activities.map((activity, index) => (
              <p key={index}>{activity.name}</p>
            ))}
          </div>
          <div className={styles.roles}>
            <h4>Role/Position</h4>
            {activities.map((activity, index) => (
              <p key={index}>{activity.role}</p>
            ))}
          </div>
          <div className={styles.achievements}>
            <h4>Achievements</h4>
            {achievements.map((achievement, index) => (
              <p key={index}>{achievement}</p>
            ))}
          </div>
        </div>
        <h3 className={styles.sectionTitle}>Health Information</h3>
        <h4 className={styles.subSectionTitle}>Special Medical Conditions (if any)</h4>
        <div className={styles.medicalInfo}></div>
      </div>
    </section>
  );
}

export default AdditionalInfo;