import React from 'react';

const Teacher = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome Teachers!</h1>
        <p>Your support in shaping young minds.</p>
      </header>

      <section className="features">
        <div className="feature-box communication">
          <a href="/communication" className="feature-link">
            <span className="icon">📞</span>
            <h3>Communication Tools</h3>
            <p>Connect easily with parents and staff.</p>
          </a>
        </div>
        
        <div className="feature-box tracking">
          <a href="/Progress" className="feature-link">
            <span className="icon">📈</span>
            <h3>Student Progress Tracking</h3>
            <p>Upload Marks and Attendance</p>
          </a>
        </div>
        
        <div className="feature-box notices">
          <a href="/notices" className="feature-link">
            <span className="icon">📰</span>
            <h3>Important Notices</h3>
            <p>Upload Notices</p>
          </a>
        </div>
        
        <div className="feature-box resources">
          <a href="/upload" className="feature-link">
            <span className="icon">📚</span>
            <h3>Resource Library</h3>
            <p>Upload Students Homework</p>
          </a>
        </div>
        
        <div className="feature-box payments">
          <a href="/payment" className="feature-link">
            <span className="icon">💳</span>
            <h3>Secure Payments</h3>
            <p>Upload payment fees</p>
          </a>
        </div>
      </section>

      <footer className="home-footer">
        <p>Contact us: <a href="mailto:example@email.com">example@email.com</a></p>
        <p>&copy; 2024 EduPro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Teacher;
