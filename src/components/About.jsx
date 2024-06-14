import React from 'react';
import './About.css';
import profilePicture from '../images/me2.jpg'; // Adjust the path to your image

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={profilePicture} className="img-fluid pic" alt="Akhil" />
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="about-title">Akhilesh Reddy Katapally</h2>
            <p className="about-text">
            Hi! I'm Akhilesh. With a strong passion for software development, I have contributed to high-quality software projects through my knowledge in developing and maintaining dynamic user interfaces and robust backend systems. I am committed to continuous learning and growth, always staying updated with the latest technologies and best practices to deliver exceptional results.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

