import React from 'react';
import styles from './StudentBio.module.css';

function AcademicInfo() {
  const infoTabs = ['Personal Information', 'Contact Information', 'Academic Information', 'Payment Information', 'Additional Information'];
  const subjects = [
    { id: 'AL00023', name: 'Combined Mathematics', teacher: 'Mrs. Athukorala' },
    { id: 'AL00012', name: 'Chemistry', teacher: 'Mrs. Shamali' },
    { id: 'AL00014', name: 'Physics', teacher: 'Mr. Perera' }
  ];

  return (
    <section className={styles.academicInfo}>
      <nav className={styles.infoTabs}>
        {infoTabs.map((tab, index) => (
          <button key={index} className={`${styles.tabButton} ${index === 2 ? styles.activeTab : ''}`}>
            {tab}
          </button>
        ))}
      </nav>
      <div className={styles.infoContent}>
        <div className={styles.gradeInfo}>
          <div>
            <h3>Current Grade</h3>
            <p className={styles.grade}>12</p>
          </div>
          <div>
            <h3>Class Teacher</h3>
            <p className={styles.teacher}>Mrs. Shamali</p>
          </div>
        </div>
        <h3>Subjects</h3>
        <table className={styles.subjectsTable}>
          <thead>
            <tr>
              <th>Sub. ID</th>
              <th>Subject Name</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.id}>
                <td>{subject.id}</td>
                <td>{subject.name}</td>
                <td>{subject.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className={styles.examResults}>Exam Results</button>
      </div>
    </section>
  );
}

export default AcademicInfo;
