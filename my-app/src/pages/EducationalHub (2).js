import React from 'react';
import './EducationalHub.css';

const EducationalHub = () => {
  return (
    <div className="educational-hub-container">
      <section className="welcome-section">
        <h1>Welcome to Our Educational Hub</h1>
      </section>

      <section className="videos-section">
        <h2>Videos about Fruiting Plant Diseases</h2>
        <div className="video-container">
          <div className="video-box">
            <iframe
              title="Video 1"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/05ITJlgPcR0"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-box">
            <iframe
              title="Video 2"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/98sJyL1V_jA"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          
          <div className="video-box">
            <iframe
              title="Video 4"
              width="560"
              height="315"
              src="./video1.mp4"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="books-section">
        <h2>Books and PDFs</h2>
        <div className="book-links">
          <a href="https://www.researchgate.net/publication/359352763_A_Review_on_Fruit_Leaf_Disease_Detection_using_Various_Image_Processing_Techniques" target="_blank" rel="noopener noreferrer">
            Book 1
          </a>
          <a href="https://www.researchgate.net/publication/236683242_Detection_and_Classification_of_Apple_Fruit_Diseases_Using_Complete_Local_Binary_Patterns" target="_blank" rel="noopener noreferrer">
            Book 2
          </a>
          <a href="https://www.researchgate.net/publication/349527761_PeachNet_Peach_Diseases_Detection_for_Automatic_Harvesting" target="_blank" rel="noopener noreferrer">
            Book 3
          </a>
          <a href="https://ieeexplore.ieee.org/document/10200184" target="_blank" rel="noopener noreferrer">
            Book 4
          </a>
          <a href="https://www.academia.edu/43007902/Orange_Fruit_Disease_Classification_using_Deep_Learning_Approach" target="_blank" rel="noopener noreferrer">
            Book 5
          </a>
        </div>
        
      </section>
    </div>
  );
};

export default EducationalHub;