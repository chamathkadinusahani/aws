import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import styles from './RegistrationForm.module.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Validation function
  const validate = () => {
    const newErrors = {};
  
    const { fullname, password } = formData;
  
    // Password cannot contain parts of the full name
    const nameParts = fullname.trim().split(' ');
    const passwordLower = password.toLowerCase();
    
    if (!fullname) {
      newErrors.fullname = 'Full name is required';
    }
  
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
  
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 5) {
      newErrors.username = 'Username must be at least 5 characters long';
    }
  
    if (!password) {
      newErrors.password = 'Password is required';
    } else {
      // Check length between 8 and 12
      if (password.length < 8 || password.length > 12) {
        newErrors.password = 'Password must be between 8 and 12 characters long';
      }
  
      // Check if password contains parts of the full name
      if (nameParts.some(part => passwordLower.includes(part.toLowerCase()))) {
        newErrors.password = 'Password cannot contain parts of your full name';
      }
  
      // Password complexity: must match at least 3 of the conditions
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[@#$%^&+=]/.test(password);
  
      const complexityConditions = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;
  
      if (complexityConditions < 3) {
        newErrors.password = 'Password must meet at least 3 of the following: uppercase letter, lowercase letter, number, special character';
      }
    }
  
    return newErrors;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      // Show all validation errors as an alert
      const errorMessages = Object.values(validationErrors).join('\n');
      alert(errorMessages);
      return;
    }
  
    setLoading(true); // Set loading to true before making the request
    setSuccessMessage(''); // Reset success message
  
    // Submit form data to backend API
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false); // Stop loading when the response is received
        console.log('Response from backend:', data);
  
        if (data.success) {
          // Registration successful
          setSuccessMessage('Registration successful!');
          setFormData({ fullname: '', username: '', email: '', password: '' });

          // Show alert with a link to login
          alert('Registration successful! You can now log in using the link below: \nAlready have an account? Sign in now: http://localhost:3000/admin-login');
          // Optionally redirect to login page after alert
          window.location.href = '/admin-login';

        } else {
          // Backend sends a specific message if email or username exists
          if (data.message === 'Email already exists') {
            alert('This email is already registered. Please use a different email.');
          } else if (data.message === 'Username already exists') {
            alert('This username is already taken. Please choose a different username.');
          } else {
            alert(data.message || 'Registration failed!');
          }
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false); // Stop loading if there's an error
        alert('Network error. Please try again later.');
      });
  };
  
  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.formContainer}> 
      <form className={styles.registrationForm} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>REGISTER</h2>

        {successMessage && <p className={styles.success}>{successMessage}</p>}

        <div className={styles.inputGroup}>
          <label htmlFor="fullname" className={styles.inputLabel}>Full Name</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.inputLabel}>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>

        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Submitting...' : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
