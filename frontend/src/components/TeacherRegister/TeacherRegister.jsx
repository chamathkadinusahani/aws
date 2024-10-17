import React from 'react';
import styles from './TeacherRegister.module.css';

const TeacherRegister = () => {
  return (
    <div className={styles.teacherRegister}>
      

      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageColumn}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb4ccf4c4c6f344c47254f91c1d9897d471ef88a58699cc9d9a8d7668bf47e6d?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" className={styles.mainImage} alt="Teacher registration illustration" />
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formWrapper}>
              <h1 className={styles.formTitle}>REGISTER</h1>
              <div className={styles.segmentedButtons}>
                <button className={`${styles.segmentButton} ${styles.segmentStart}`}>
                  <div className={styles.segmentContainer}>
                    <div className={styles.segmentStateLayer}>student</div>
                  </div>
                </button>
                <button className={`${styles.segmentButton} ${styles.segmentMiddle}`}>
                  <div className={styles.segmentContainer}>
                    <div className={styles.segmentStateLayer}>teacher</div>
                  </div>
                </button>
                <button className={`${styles.segmentButton} ${styles.segmentEnd}`}>
                  <div className={styles.segmentContainer}>
                    <div className={styles.segmentStateLayer}>admin</div>
                  </div>
                </button>
              </div>
              <form>
                <div className={styles.inputField}>
                  <label htmlFor="firstName" className={styles.inputLabel}>First Name</label>
                  <div className={styles.inputWrapper}>
                    <input id="firstName" className={styles.inputInner} type="text" />
                  </div>
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="lastName" className={styles.inputLabel}>Last Name</label>
                  <div className={styles.inputWrapper}>
                    <input id="lastName" className={styles.inputInner} type="text" />
                  </div>
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="teacherId" className={styles.inputLabel}>Teacher Id</label>
                  <div className={styles.inputWrapper}>
                    <input id="teacherId" className={styles.inputInner} type="text" />
                  </div>
                </div>
                <div className={styles.inputField}>
                  <label htmlFor="password" className={styles.inputLabel}>Password</label>
                  <div className={styles.inputWrapper}>
                    <input id="password" className={styles.inputInner} type="password" />
                  </div>
                </div>
                <button type="submit" className={styles.submitButton}>SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default TeacherRegister;