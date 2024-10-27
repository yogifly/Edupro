import React from 'react';
import './Parent.css'; // Ensure to create this CSS file for styling

const Parent = () => {
  return (
    <div className="parent-container">
      <header className="parent-header">
        <h1 className="header-title">Welcome Parents!</h1>
        <p className="header-subtitle">
          Your partner in your child's education journey.
        </p><br>
        </br>
      </header>
      <br>
      </br>
      <br>
      </br><br>
      </br><br>
      </br><br>
      </br><br>
      </br><br>
      </br><br>
      </br>
      <br>
      </br>
     
      <section className="features-section">
        {[
          {
            title: 'Communication Tools',
            description: 'Connect easily with parents and staff.',
            icon: '📞',
            color: '#e57373',
            link: '/student',
          },
          {
            title: 'Student Progress Tracking',
            description: 'Monitor attendance and grades weekly.',
            icon: '📈',
            color: '#64b5f6',
            link: '/progress',
          },
          {
            title: 'Important Notices',
            description: 'Stay informed about important notices',
            icon: '📰',
            color: '#ffd54f',
            link: '/notices',
          },
          {
            title: 'Resource Library',
            description: 'Access study materials and notes anytime.',
            icon: '📚',
            color: '#81c784',
            link: '/files',
          },
          {
            title: 'Secure Payments',
            description: 'Pay school fees online with ease.',
            icon: '💳',
            color: '#ba68c8',
            link: '/payment',
          },
          {
            title: 'Drawing Board',
            description: 'Drawing.',
            icon: '🎨',
            color: '#4dd0e1',
            link: '/drawing',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            style={{ border: `1px solid ${feature.color}` }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = 'translateY(-5px)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = 'translateY(0)')
            }
          >
            <a
              href={feature.link}
              className="feature-link"
            >
              <span
                className="feature-icon"
                style={{ color: feature.color }}
              >
                {feature.icon}
              </span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </a>
          </div>
        ))}
      </section>

      <footer className="parent-footer">
        <p className="footer-contact">
          Contact us: <a href="mailto:example@email.com" className="footer-email">example@email.com</a>
        </p>
        <p className="footer-rights">&copy; 2024 EduPro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Parent;
