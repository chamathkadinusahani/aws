// AdminDashboard.jsx
import React, { useState } from 'react';
import './admin.css';

const AdminDashboard = () => {
  const [view, setView] = useState('dashboard');

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <div className="admin-container">
      <nav className="admin-navbar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li onClick={() => handleViewChange('registerStudent')}>Register Student</li>
          <li onClick={() => handleViewChange('updateStudent')}>Update Student Activation</li>
          <li onClick={() => handleViewChange('registerTeacher')}>Register Teacher</li>
          <li onClick={() => handleViewChange('updateTeacher')}>Update Teacher Activation</li>
          <li onClick={() => handleViewChange('paymentInvoices')}>Payment Invoices</li>
        </ul>
      </nav>

      <main className="admin-content">
        {view === 'dashboard' && <h2>Welcome to the Admin Dashboard</h2>}
        {view === 'registerStudent' && <RegisterStudent />}
        {view === 'updateStudent' && <UpdateStudent />}
        {view === 'registerTeacher' && <RegisterTeacher />}
        {view === 'updateTeacher' && <UpdateTeacher />}
        {view === 'paymentInvoices' && <PaymentInvoices />}
      </main>
    </div>
  );
};

// Dummy Components for Forms (can be connected to Flask backend)
const RegisterStudent = () => (
  <div className="form-container">
    <h3>Register New Student</h3>
    <form action="/register_student" method="POST">
      <input type="text" name="name" placeholder="Student Name" required />
      <input type="email" name="email" placeholder="Student Email" required />
      <button type="submit">Register</button>
    </form>
  </div>
);

const UpdateStudent = () => (
  <div className="form-container">
    <h3>Update Student Activation</h3>
    <form action="/update_student_activation" method="POST">
      <input type="text" name="studentId" placeholder="Student ID" required />
      <select name="status" required>
        <option value="active">Activate</option>
        <option value="inactive">Deactivate</option>
      </select>
      <button type="submit">Update Status</button>
    </form>
  </div>
);

const RegisterTeacher = () => (
  <div className="form-container">
    <h3>Register New Teacher</h3>
    <form action="/register_teacher" method="POST">
      <input type="text" name="name" placeholder="Teacher Name" required />
      <input type="email" name="email" placeholder="Teacher Email" required />
      <button type="submit">Register</button>
    </form>
  </div>
);

const UpdateTeacher = () => (
  <div className="form-container">
    <h3>Update Teacher Activation</h3>
    <form action="/update_teacher_activation" method="POST">
      <input type="text" name="teacherId" placeholder="Teacher ID" required />
      <select name="status" required>
        <option value="active">Activate</option>
        <option value="inactive">Deactivate</option>
      </select>
      <button type="submit">Update Status</button>
    </form>
  </div>
);

const PaymentInvoices = () => (
  <div className="form-container">
    <h3>Payment Invoices</h3>
    <p>Invoice data will be displayed here...</p>
  </div>
);

export default AdminDashboard;
