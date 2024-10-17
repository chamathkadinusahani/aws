import React from 'react';
import styles from './RegisterForm.module.css';

function RegisterForm() {
  const userTypes = ['student', 'teacher', 'admin'];

  return (
    <section className={styles.registerSection}>
      <h2 className={styles.registerTitle}>REGISTER</h2>
      <div className={styles.userTypeSelector}>
        {userTypes.map((type, index) => (
          <button
            key={type}
            className={`${styles.userTypeButton} ${index === 0 ? styles.start : index === userTypes.length - 1 ? styles.end : styles.middle}`}
          >
            {type}
          </button>
        ))}
      </div>
      <form className={styles.registerForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.inputLabel}>First Name</label>
          <input type="text" id="firstName" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className={styles.inputLabel}>Last Name</label>
          <input type="text" id="lastName" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="studentId" className={styles.inputLabel}>Student Id</label>
          <input type="text" id="studentId" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>Password</label>
          <input type="password" id="password" className={styles.inputField} />
        </div>
        <button type="submit" className={styles.submitButton}>SUBMIT</button>
      </form>
    </section>
  );
};

export default RegisterForm;