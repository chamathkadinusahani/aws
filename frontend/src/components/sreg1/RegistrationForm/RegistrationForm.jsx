import React from 'react';
import styles from './RegistrationForm.module.css';

function RegistrationForm() {
  const userTypes = ['student', 'teacher', 'admin'];

  return (
    <div className={styles.formContainer}>  {/* Add container div */}
      <form className={styles.registrationForm}>
        <h1 className={styles.formTitle}>REGISTER</h1>

        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.inputLabel}>School Name</label>
          <input type="text" id="firstName" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className={styles.inputLabel}>Address</label>
          <input type="text" id="lastName" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="adminId" className={styles.inputLabel}>Email</label>
          <input type="email" id="adminId" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>Password</label>
          <input type="password" id="password" className={styles.inputField} />
        </div>
        <button type="submit" className={styles.submitButton}>SUBMIT</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
