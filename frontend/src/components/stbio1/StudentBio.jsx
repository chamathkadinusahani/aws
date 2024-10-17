import React from 'react';

import StudentInfo from './StudentInfo';

import styles from './StudentBio.module.css';

function StudentBio() {
  return (
    <div className={styles.studentsBioPersonal}>
     
      <main className={styles.mainContent}>
      
        <StudentInfo />
      </main>
      
    </div>
  );
}

export default StudentBio;