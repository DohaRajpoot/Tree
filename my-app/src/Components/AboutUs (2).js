import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about-us-container">
      <header>
        <h1>About Us</h1>
      </header>
      <div className="about-content">
        <div className="fruit-images">
          <img src="orangerot.jpeg" alt="Orange" />
          <img src="peachrot.jpeg" alt="Peach" />
          <img src="apple.jpeg" alt="Apple" />
        </div>
        <p>
          Welcome to our platform! We are dedicated to providing valuable services and information related to plant diseases and their treatments. Our platform offers features such as symptom detection, treatment recommendations, and educational content for plant enthusiasts.
        </p>
        <p>
          With a team of experts in agriculture and plant health, we aim to create a community where users can learn, share, and contribute to the well-being of their plants. Whether you are a gardening enthusiast or a professional in the field, our platform is designed to cater to your needs.
        </p>
        <p>
          Explore our services, learn about symptoms, find treatments, and dive into our educational hub. We are passionate about promoting healthy plant life and providing solutions to common plant-related issues.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;