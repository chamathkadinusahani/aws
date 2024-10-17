import React from 'react';

import RegisterForm from '../RegisterForm/RegisterForm';

import styles from './Login02.module.css';

function Login02() {
  return (
    <div className={styles.login02}>
     
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/706903835b477052d24b227bdde13af94c4027f3fcde3ae6792ea268fc5571f8?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="School illustration" className={styles.schoolImage} />
          <RegisterForm />
        </div>
      </main>
    
    </div>
  );
};

export default Login02;