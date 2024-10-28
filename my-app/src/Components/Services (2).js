import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services-container">
      <div className="service-box">
        <img src="treat.jpeg" alt="Treatment" />
        
        <h2 className="h-secondary">Treatment</h2>
        <p>
          Users will be able to treat plant diseases through the provided treatments, and we also provide you with some medicine store from where you can buy your defected plant medicines either online or by visiting.
        </p>
        <h2><Link to="/Treatment">Learn more</Link></h2>
      </div>

      <div className="service-box">
        <img src="pre.jpeg" alt="Precautions" />
        <h2 className="h-secondary">Precautions</h2>
       
        
        <p>Orange, Peach, and Apple disease can be treated easily if detected in the early stages. There are some precautions that are mentioned to prevent early diseases in fruiting plants.</p>
        <h2><Link to="/Precaution">Learn more</Link></h2>
      </div>

      <div className="service-box">
        <img src="peachscab.jpeg" alt="Detection" />
        <h2 className="h-secondary">Detection</h2>
        
        <p>Orange, Peach, and Apple  if detected in the early stages.we will provide you a detection way to detect them through Uploading that affected fruiting plant image.</p>
        <h2><Link to="/Detection">Learn more</Link></h2>
        
      </div>
      <div className="service-box">
        <img src="apple.jpeg" alt="Educational Hub" />
        <h2 className="h-secondary">Educational Hub</h2>

        <p>
          A source of educational content, tools, and resources to bring together various materials and information. It includes videos, books, and some articles of different authors.
        </p>
        
        <h2><Link to="/EducationalHub">Learn more</Link></h2>
      </div>

      <div className="service-box">
        <img src="ecommerce.jpeg" alt="E-Commerce" />
       
        <h2 className="h-secondary">ECommerce</h2>
        <p> Explore our E-Commerce service where you can get links to online stores for purchasing plant-related products, tools, and supplies. Not only in your country but also World Wide availability.
        </p>
        <h2><Link to="/ECommerce">Learn more</Link></h2>
      </div>
    </section>
  );
}

export default Services;