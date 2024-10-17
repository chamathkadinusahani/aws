import React from 'react';
import styles from './StudentBio.module.css';

function StudentInfo() {
  const studentData = {
    firstName: 'Kasun',
    middleName: 'Tharinda',
    lastName: 'de Silva',
    studentId: '20240001234',
    dateOfBirth: '20/08/2001',
    gender: 'Male',
    admissionDate: '02/02/2006',
    nationality: 'Sri Lankan'
  };

  return (
    <section className={styles.studentInfo}>
      <div className={styles.studentHeader}>
        <div className={styles.studentPhotoWrapper}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3b3856f8c75c5f2d5fd1eb62774b2d7362f08a0f8bd260f0b89ad4593b3a939?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8" alt="Student Photo" className={styles.studentPhoto} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0639e9475c5ab57e31d148144ae2a63c7aab1ad2035a2e89aceef04b6d062946?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8" alt="" className={styles.editIcon} />
        </div>
        <div className={styles.studentNameId}>
          <h2 className={styles.studentName}>{`${studentData.firstName} ${studentData.middleName} ${studentData.lastName}`}</h2>
          <p className={styles.studentId}>{studentData.studentId}</p>
        </div>
      </div>
      <div className={styles.studentDetails}>
        <div className={styles.detailColumn}>
          <div className={styles.detailGroup}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" value={studentData.firstName} readOnly className={styles.detailInput} />
          </div>
          <div className={styles.detailGroup}>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <div className={styles.dateWrapper}>
              <input id="dateOfBirth" type="text" value={studentData.dateOfBirth} readOnly className={styles.detailInput} />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc691f6e5c15b567c3d283d30fcb2104505b0658e5cb6db712db1a52dfa144d?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8" alt="Calendar" className={styles.calendarIcon} />
            </div>
          </div>
          <div className={styles.detailGroup}>
            <label htmlFor="studentIdInput">Student ID</label>
            <input id="studentIdInput" type="text" value={studentData.studentId} readOnly className={styles.detailInput} />
          </div>
        </div>
        <div className={styles.detailColumn}>
          <div className={styles.detailGroup}>
            <label htmlFor="middleName">Middle Name</label>
            <input id="middleName" type="text" value={studentData.middleName} readOnly className={styles.detailInput} />
          </div>
          <div className={styles.detailGroup}>
            <label htmlFor="gender">Gender</label>
            <input id="gender" type="text" value={studentData.gender} readOnly className={styles.detailInput} />
          </div>
          <div className={styles.detailGroup}>
            <label htmlFor="admissionDate">Admission Date</label>
            <div className={styles.dateWrapper}>
              <input id="admissionDate" type="text" value={studentData.admissionDate} readOnly className={styles.detailInput} />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc691f6e5c15b567c3d283d30fcb2104505b0658e5cb6db712db1a52dfa144d?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8" alt="Calendar" className={styles.calendarIcon} />
            </div>
          </div>
        </div>
        <div className={styles.detailColumn}>
          <div className={styles.detailGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" value={studentData.lastName} readOnly className={styles.detailInput} />
          </div>
          <div className={styles.detailGroup}>
            <label htmlFor="nationality">Nationality</label>
            <input id="nationality" type="text" value={studentData.nationality} readOnly className={styles.detailInput} />
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4a93094d04bda1c8d4766dd35d82b9c3522376a9b638781e779508cfa0dfab3?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8" alt="Student Badge" className={styles.studentBadge} />
        </div>
      </div>
    </section>
  );
}

export default StudentInfo;