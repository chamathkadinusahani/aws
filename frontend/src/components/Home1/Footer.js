import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="logo footer.png" alt="ABC School" />
        </div>
        <div className="footer-contact-info">
          <p>12th street, <br/>
          Kumarathunga Mawatha, <br/>
           Colombo 07 <br/>
           Sri Lanka <br/>
           <a href="#directions">Directions :</a> <br/><br/><br/>
           School Office: (011) 234 5567 <br/>
           Email: abc@gmail.com <br/>
           <a href="#contact">Contact Us :</a></p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#course-details">Course Details</a>
          <a href="#student-bio">Student Bio</a>
          <a href="#payments">Payments</a>
          <a href="#login">Login</a>
        </div>
        <div className="footer-quick-links">
          <a href="#directions">Directions</a>
         
        </div>
      </div>
      <div className="footer-bottom">
  <div className="footer-left">
    <p>© ABC School 2011 | All Rights Reserved</p>
  </div>
  <div className="footer-right">
    <p>Website by: Team 1 Fifthcode Training Programme</p>
  </div>
</div>

    </footer>
  );
}

export default Footer;
