import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home11/Home111';
import WelcomePage from './components/welcomelogin/WelcomePage';
import LoginPage from './components/studentlogin/StudentLogin';
import TeacherLogin from './components/TeacherLogin/TeacherLogin';
import AdminLogin from './components/AdminLogin/AdminLogin';
import AdminRegister from './components/AdminRegister/MainComponent/MainComponent';
import Login02 from './components/studentregister/Login02/Login02';
import TeacherRegister from './components/TeacherRegister/TeacherRegister';
import ABCSchool from './aws-components/ABCSchool';
import { ThemeProvider } from '@aws-amplify/ui-react';
import studioTheme from './aws-components/studioTheme';
import Footer from './components/Footer/Footer';
import Home from './components/Home11/Home111';
import AboutUs from './components/about65';
import StudentBio from './components/studentlogin/StudentLogin';
import Header from './components/Header/Header';
import Register88 from './components/Register88/WelcomePage';
import StudentBio1 from './components/stbio1/StudentBio';
import LoginPage5 from './components/sreg3/MainComponent/MainComponent';
import LoginPage7 from './components/sreg2/MainComponent/MainComponent';
import LoginPage6 from './components/sreg1/MainComponent/MainComponent';
import AdminLogin1 from './components/admindash/AdminDashboard';
import AdminDash88 from './components/admindash/AdminDashboard';
import Contactus from './components/Contactus1/Body';



function App() {
  return (
    <Router>
      
      <Header/>
      <ThemeProvider theme={studioTheme}>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Student Login */}
          <Route path="/login1" element={<WelcomePage />} /> 
          <Route path="/teacher-login" element={<TeacherLogin />} /> {/* Teacher Login */}
          <Route path="/admin-login" element={<AdminLogin />} /> {/* Admin Login */}
          <Route path="/admindash" element={<AdminLogin1 />} /> 
          <Route path="/signup" element={<Login02 />} /> {/* Student Signup */}
          <Route path="/admin-register" element={<AdminRegister />} /> {/* Admin Register */}
          <Route path="/teacher-register" element={<TeacherRegister />} /> {/* Teacher Register */}
          <Route path="/Home" element={<Home />} /> 
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/StudentBio" element={<StudentBio />} />
          <Route path="/Register88" element={<Register88 />} />
          <Route path="/signin" element={<StudentBio1 />} />
          <Route path="/login7" element={<LoginPage7 />} />
          <Route path="/login5" element={<LoginPage5 />} />
          <Route path="/login6" element={<LoginPage6 />} />
          <Route path="/admin-dashboard" element={<AdminDash88/>} />
          <Route path="/contact" element={<Contactus />} />
          </Routes>
        <ABCSchool />
      </ThemeProvider>
      <Footer/>
    </Router>
  );
};

export default App;