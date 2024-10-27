import React from "react";
import './Eschool.css';
import PhotoSwap from './PhotoSwap'; 
const Eschool = () => {
  return (
    <div>
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br /> 
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br /> 
      <br /><br /><br /> 
      <br /><br /><br />
      <br /><br /><br /> 
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br /> 
      <br /><br /><br />
      <br /><br /><br /> 
      <br /><br /><br />
      <br /><br /><br />
      
      
      
      
      <header>
        <div className="container">
          <div className="logo">
            <img src="images/logo.png" alt="EDUPRO Logo" />
          </div>
          <nav>
            <ul>
              <li><a href="/signup">Register</a></li>
              <li><a href="/academics">Academics</a></li>
              <li><a href="/activities">Activities</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/login" className="cta-button">Login Now</a></li>
            </ul>
          </nav>
        </div>
      </header>

    
      <section className="intro-section">
        <div className="content-container">
          <div className="text-box">
            <h1>Welcome to EDUPRO</h1>
            <p>
              EDUPRO is designed to bridge the gap between teachers and parents, ensuring a seamless exchange of information. 
              Explore features such as important notices, weekly calendars, feedback forms, and easy access to study materials. 
              Our platform enhances communication and fosters student engagement, making education a collaborative effort.
            </p>
          </div>
          <div className="image-box">
            <img src="images/home.png" alt="EDUPRO Main Image" />
          </div>
        </div>
      </section>

      
      <section className="photo-swap-section">
        <h2>Photo Gallery</h2>
        <PhotoSwap photos={[
          'images/school.jpg',
          'images/school2.jpg',
          'images/school3.jpg',
          'images/school4.jpg'
        ]} />
      </section>

      
      
      <section className="about-us-section">
        <div className="content-container">
          <h2 className="about-us-heading">About Us</h2>
          <p>
            Welcome to [School Name]! Our school is committed to providing high-quality education in a nurturing environment. 
            With a dedicated team of experienced educators, we offer a comprehensive curriculum that emphasizes both academic excellence and character development. 
            At [School Name], we believe in fostering creativity, critical thinking, and collaboration, preparing our students for success in an ever-changing world.
          </p>
          <p>
            Our campus is equipped with modern facilities, including state-of-the-art classrooms, science labs, a library, and sports areas. 
            We also prioritize extracurricular activities, offering a wide range of clubs and sports teams that encourage students to explore their passions outside the classroom.
          </p>
          <p>
            We are proud of our close-knit community of students, parents, and teachers, and we look forward to welcoming you to our family!
          </p>
        </div>
      </section>

    </div>
  );
};

export default Eschool;
