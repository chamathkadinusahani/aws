import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.id) {
      newErrors.id = 'ID is required';
    }

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit form data to backend API
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Registration successful!');
        // Reset the form after successful submission
        setFormData({ id: '', name: '', email: '', password: '' });
        setErrors({});
      } else {
        alert(data.message || 'Registration failed!');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Network error. Please try again later.');
    });
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,  // Using the input 'name' attribute
    });
  };

  return (
    <form className={styles.registrationForm} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>REGISTER</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="id" className={styles.inputLabel}>ID</label>
        <input
          type="text"
          name="id"  // Input field for ID
          value={formData.id}
          onChange={handleChange}
          className={styles.inputField}
        />
        {errors.id && <p className={styles.error}>{errors.id}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.inputLabel}>Name</label>
        <input
          type="text"
          name="name"  // Input field for Name
          value={formData.name}
          onChange={handleChange}
          className={styles.inputField}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.inputLabel}>Email</label>
        <input
          type="email"
          name="email"  // Input field for Email
          value={formData.email}
          onChange={handleChange}
          className={styles.inputField}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.inputLabel}>Password</label>
        <input
          type="password"
          name="password"  // Input field for Password
          value={formData.password}
          onChange={handleChange}
          className={styles.inputField}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </div>

      <button type="submit" className={styles.submitButton}>
        SUBMIT
      </button>
    </form>
  );
}

export default RegistrationForm;
