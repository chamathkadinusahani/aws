import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import styles from './WelcomeSection.module.css';

function WelcomeSection() {
  const navigate = useNavigate(); // Allows you to navigate programmatically

  // User types and their corresponding login paths and images
  const userTypes = [
    {
      type: 'School',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dd5337281dc8b84da5a6add780c10318ad2a97c51dcef4e95fb11d109a8be487?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5',
      path: '/login6' // Path for student login
    },
    {
      type: 'Mass institute',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6681b1fd006f251052757316b6c4beb96c1950572af9e5050ed97aaf19fbe1cd?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5',
      path: '/login7' // Path for teacher login
    },
    {
      type: 'Small institute',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/371f729656fdc54b543b3b8a8f6687df83c2552fe2e146e56ce5d0d2322f3f1e?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5',
      path: '/login5' // Path for admin login
    }
  ];

  // Function to handle navigation on button click
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the respective page
  };

  return (
    <section className={styles.welcomeSection}>
      <h2 className={styles.welcomeTitle}>WELCOME TO FRITHCODE</h2>
      <h3 className={styles.welcomeSubtitle}>REGISTER,</h3>
      <div className={styles.userTypeContainer}>
        {userTypes.map((user, index) => (
          <div key={index} className={styles.userTypeCard}>
            <img
              src={user.imageSrc}
              alt={`${user.type} icon`}
              className={styles.userTypeImage}
            />
            <h3>{user.type}</h3><br/>
            {/* Button for each user type */}
            <button
              className={styles.userTypeButton}
              onClick={() => handleNavigation(user.path)}
            >
               As a {user.type}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WelcomeSection;
