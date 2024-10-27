import React from 'react';

const Teacher = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <header
        style={{
          textAlign: 'center',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '30px',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '800px',
          marginBottom: '40px',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2rem' }}>Welcome Teachers!</h1>
        <p style={{ marginTop: '10px', fontSize: '1.1rem' }}>
          Your support in shaping young minds.
        </p>
      </header>

      <section
        style={{
          display: 'flex',
          gap: '20px',
          
          justifyContent: 'center',
        }}
      >
        {[
          {
            title: 'Communication Tools',
            description: 'Connect easily with parents and staff.',
            icon: '📞',
            color: '#e57373',
            link: '/communication',
          },
          {
            title: 'Student Progress Tracking',
            description: 'Upload Marks and Attendance',
            icon: '📈',
            color: '#64b5f6',
            link: '/Progress',
          },
          {
            title: 'Important Notices',
            description: 'Upload Notices',
            icon: '📰',
            color: '#ffd54f',
            link: '/notices',
          },
          {
            title: 'Resource Library',
            description: 'Upload Students Homework',
            icon: '📚',
            color: '#81c784',
            link: '/upload',
          },
          {
            title: 'Add Students',
            description: 'List of Students',
            icon: '💳',
            color: '#ba68c8',
            link: '/add-student',
          },
          {
            title: 'Add Marks and Grades',
            description: 'Students Report',
            icon: '💳',
            color: '#4dd0e1',
            link: '/add-marks',
          },
        ].map((feature, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              width: '250px',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = 'translateY(-5px)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = 'translateY(0)')
            }
          >
            <a
              href={feature.link}
              style={{
                color: '#333',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  fontSize: '3rem',
                  color: feature.color,
                  display: 'block',
                  marginBottom: '10px',
                }}
              >
                {feature.icon}
              </span>
              <h3 style={{ marginTop: '10px', fontSize: '1.3rem' }}>
                {feature.title}
              </h3>
              <p style={{ margin: '10px 0 0', fontSize: '1rem', color: '#666' }}>
                {feature.description}
              </p>
            </a>
          </div>
        ))}
      </section>

      <footer
        style={{
          textAlign: 'center',
          marginTop: '30px',
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          width: '100%',
          maxWidth: '800px',
          borderRadius: '8px',
        }}
      >
        <p style={{ margin: '5px 0' }}>
          Contact us:{' '}
          <a
            href="mailto:example@email.com"
            style={{ color: '#f1f1f1', textDecoration: 'underline' }}
          >
            example@email.com
          </a>
        </p>
        <p style={{ margin: '5px 0' }}>&copy; 2024 EduPro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Teacher;
