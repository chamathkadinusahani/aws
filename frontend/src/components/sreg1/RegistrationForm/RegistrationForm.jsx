import React from 'react';
import styles from './RegistrationForm.module.css';

function RegistrationForm() {
  const userTypes = ['student', 'teacher', 'admin'];

  return (
    <div className={styles.formContainer}>  {/* Add container div */}
      <form className={styles.registrationForm}>
        <h1 className={styles.formTitle}>REGISTER</h1>

        <h2 >COMPANY DETAILS</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.inputLabel}>School Name</label>
          <input type="text" id="firstName" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className={styles.inputLabel}>Registered Address</label>
          <input type="text" id="lastName" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className={styles.inputLabel}>Registration No/Census No</label>
          <input type="text" id="lastName" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className={styles.inputLabel}>School/Institute Type</label>
          
          <div className={styles.radioGroup}>
    <label>
      <input type="radio" name="instituteType" value="school" />
      School
    </label>
    <label>
      <input type="radio" name="instituteType" value="massInstitute" />
      Mass institute
    </label>
    <label>
      <input type="radio" name="instituteType" value="smallInstitute" />
      Small institute
    </label>
  </div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className={styles.inputLabel}>Contact No. (Office)</label>
          <input type="text" id="lastName" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="adminId" className={styles.inputLabel}>Email</label>
          <input type="email" id="adminId" className={styles.inputField} />
        </div>

        <h2 >User Information</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.inputLabel}>Full name </label>
          <input type="text" id="firstName" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.inputLabel}>NIC / PP Number </label>
          <input type="text" id="firstName" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.inputLabel}>Mobile</label>
          <input type="text" id="firstName" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.inputLabel}>Preferred UserName</label>
          <input type="text" id="firstName" className={styles.inputField} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="adminId" className={styles.inputLabel}>Email</label>
          <input type="email" id="adminId" className={styles.inputField} />
        </div>
        
        <button type="submit" className={styles.submitButton}>SUBMIT</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
