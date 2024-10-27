import React from 'react';
 // Import the CSS file
 import './Parent.css';

const Parent = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome Parents!</h1>
        <p>Your partner in your child's education journey.</p>
      </header>
      <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br /> 
    
      <section className="features">
        <div className="feature-box communication">
          <a href="/student" className="feature-link">
            <span className="icon">📞</span>
            <h3>Communication Tools</h3>
            <p>Connect easily with parents and staff.</p>
          </a>
        </div>
        
        <div className="feature-box tracking">
          <a href="/progress" className="feature-link">
            <span className="icon">📈</span>
            <h3>Student Progress Tracking</h3>
            <p>Monitor attendance and grades weekly.</p>
          </a>
        </div>
        
        <div className="feature-box notices">
          <a href="/notices" className="feature-link">
            <span className="icon">📰</span>
            <h3>Important Notices</h3>
            <p>Stay informed about important notices</p>
          </a>
        </div>
        
        <div className="feature-box resources">
          <a href="/files" className="feature-link">
            <span className="icon">📚</span>
            <h3>Resource Library</h3>
            <p>Access study materials and notes anytime.</p>
          </a>
        </div>
        
        <div className="feature-box payments">
          <a href="/payment" className="feature-link">
            <span className="icon">💳</span>
            <h3>Secure Payments</h3>
            <p>Pay school fees online with ease.</p>
          </a>
        </div>

        <div className="feature-box resources">
          <a href="/drawing" className="feature-link">
            <span className="icon">📚</span>
            <h3>Drawing board</h3>
            <p>Drawing .</p>
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

export default Parent;
