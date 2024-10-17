import React, { useState } from 'react';
import styles from './StudentBio.module.css';
import AttendanceChart from './AttendanceChart';

function StudentInfo() {
  const [activeTab, setActiveTab] = useState('personal');

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

  const contactData = {
    addressLine1: '123 Main St',
    addressLine2: 'Apt 4B',
    city: 'Colombo',
    email: 'kasun@example.com',
    mobilePhone: '+94 71 234 5678',
    residencePhone: '+94 11 234 5678',
    emergencyContact: {
      name: 'John de Silva',
      relationship: 'Father',
      phone: '+94 71 234 5679',
    }
  };


  const infoTabs = ['Personal Information', 'Contact Information', 'Academic Information', 'Payment Information', 'Additional Information'];

  const subjects = [
    { id: 'AL00023', name: 'Combined Mathematics', teacher: 'Mrs. Athukorala' },
    { id: 'AL00012', name: 'Chemistry', teacher: 'Mrs. Shamali' },
    { id: 'AL00014', name: 'Physics', teacher: 'Mr. Perera' }
  ];

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

  const renderTabContent = () => {
    switch (activeTab) {

      case 'personal':
        return (
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
        );

      case 'contact':
        return (
          <div className={styles.contactDetails}>
            <div className={styles.studentDetails}>
              {/* First row: Address Line 1, Address Line 2, City */}
              <div className={styles.detailColumn}>
                <div className={styles.detailGroup}>
                  <label htmlFor="addressLine1">Address Line 1</label>
                  <input id="addressLine1" type="text" value={contactData.addressLine1} readOnly className={styles.detailInput} />
                </div>
                <div className={styles.detailGroup}>
                  <label htmlFor="addressLine2">Address Line 2</label>
                  <input id="addressLine2" type="text" value={contactData.addressLine2} readOnly className={styles.detailInput} />
                </div>
                <div className={styles.detailGroup}>
                  <label htmlFor="city">City</label>
                  <input id="city" type="text" value={contactData.city} readOnly className={styles.detailInput} />
                </div>
              </div>

              {/* Second row: Email, Mobile Phone, Residence Phone */}
              <div className={styles.detailColumn}>
                <div className={styles.detailGroup}>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" value={contactData.email} readOnly className={styles.detailInput} />
                </div>
                <div className={styles.detailGroup}>
                  <label htmlFor="mobilePhone">Mobile Phone</label>
                  <input id="mobilePhone" type="text" value={contactData.mobilePhone} readOnly className={styles.detailInput} />
                </div>
                <div className={styles.detailGroup}>
                  <label htmlFor="residencePhone">Residence Phone</label>
                  <input id="residencePhone" type="text" value={contactData.residencePhone} readOnly className={styles.detailInput} />
                </div>
              </div>

              {/* Third row: Emergency Contact - Name, Relationship, Phone */}
              <div className={styles.detailColumn}>
                <div className={styles.detailGroup}>
                  <label htmlFor="emergencyName">Emergency Contact Name</label>
                  <input id="emergencyName" type="text" value={contactData.emergencyContact.name} readOnly className={styles.detailInput} />
                </div>
                <div className={styles.detailGroup}>
                  <label htmlFor="relationship">Relationship</label>
                  <input id="relationship" type="text" value={contactData.emergencyContact.relationship} readOnly className={styles.detailInput} />
                </div>
                <div className={styles.detailGroup}>
                  <label htmlFor="emergencyPhone">Emergency Phone</label>
                  <input id="emergencyPhone" type="text" value={contactData.emergencyContact.phone} readOnly className={styles.detailInput} />
                </div>
              </div>
            </div>
          </div>
        );

      case 'academic':
        return (
          <div className={styles.academicDetails}>
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
              <div className={styles.tableContainer}>
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
            </div>
            <AttendanceChart />
          </div>
        );



      case 'payment':
        return (
          <div className={styles.paymentDetails}>
            {/* Payment Information content */}
            <p>Payment Information goes here.</p>
          </div>
        );

      case 'additional':
        return (
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
        );
    }
  };

  return (
    <section className={styles.studentInfo}>
      <div className={styles.studentHeader}>
        <div className={styles.studentPhotoWrapper}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3b3856f8c75c5f2d5fd1eb62774b2d7362f08a0f8bd260f0b89ad4593b3a939?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8"
            alt="Student Photo"
            className={styles.studentPhoto}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0639e9475c5ab57e31d148144ae2a63c7aab1ad2035a2e89aceef04b6d062946?placeholderIfAbsent=true&apiKey=540abe8e50444d9db0d29b519fdb50e8"
            alt=""
            className={styles.editIcon}
          />
        </div>
        <div className={styles.studentNameId}>
          <h2 className={styles.studentName}>{`${studentData.firstName} ${studentData.middleName} ${studentData.lastName}`}</h2>
          <p className={styles.studentId}>{studentData.studentId}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className={styles.tabNav}>
        <button className={activeTab === 'personal' ? styles.activeTab : ''} onClick={() => setActiveTab('personal')}>Personal Information</button>
        <button className={activeTab === 'contact' ? styles.activeTab : ''} onClick={() => setActiveTab('contact')}>Contact Information</button>
        <button className={activeTab === 'academic' ? styles.activeTab : ''} onClick={() => setActiveTab('academic')}>Academic Information</button>
        <button className={activeTab === 'payment' ? styles.activeTab : ''} onClick={() => setActiveTab('payment')}>Payment Information</button>
        <button className={activeTab === 'additional' ? styles.activeTab : ''} onClick={() => setActiveTab('additional')}>Additional Information</button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </section>
  );
}

export default StudentInfo;
