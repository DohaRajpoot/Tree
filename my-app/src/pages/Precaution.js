import React from 'react';
import './Precaution.css'; 

const Precaution = () => {
  return (
    <div>
      <header>
        <h1>Precaution Service</h1>
      </header>

      <h2>APPLE </h2>
      <section className="precaution">
        <img src="apple.jpeg" alt="Apple" />
        <div className="precaution-details">
          <h2>Precaution for Brown Spot:</h2>
          <ul>
            <li>Apply a suitable fungicide preventively, especially during the vulnerable periods.</li>
            <li>Follow recommended dosage and application timings as specified by the fungicide manufacturer.</li>
            <li>Begin treatments early in the growing season to prevent brown spot development.</li>
          </ul>
        </div>
      </section>

      <section className="precaution">
        <img src="applee.jpeg" alt="Apple" />
        <div className="precaution-details">
          <h2>Insecticide precaution:</h2>
          <ul>
            <li>Regularly inspect the apple trees for signs of pest infestation.</li>
            <li>Apply an insecticide when pests are active, following the recommended application guidelines.</li>
            <li>Target the underside of leaves, where pests often reside.</li>
          </ul>
        </div>
      </section>

      <h2>PEACH</h2>
      <section className="precaution">
        <img src="peachrot.jpeg" alt="Peach" />
        <div className="precaution-details">
          <h2>Precaution for Brown Spot:</h2>
          <ul>
            <li>Apply a fungicide specifically designed to combat brown rot preventively.</li>
            <li>Initiate treatments at the first signs of brown spots on the fruit.</li>
            <li>Follow a regular schedule throughout the growing season.</li>
          </ul>
        </div>
      </section>

      <section className="precaution">
        <img src="peachscab.jpeg" alt="Peach" />
        <div className="precaution-details">
          <h2>Peach Scab Precaution:</h2>
          <ul>
            <li>Use a fungicide formulated for scab-causing pathogens.</li>
            <li>Apply the fungicide preventively or at the earliest signs of scab development.</li>
            <li>Ensure thorough coverage of both fruit surfaces and surrounding foliage.</li>
          </ul>
        </div>
      </section>
      <h2>Orange</h2>
      <section className="precaution">
  <img src="orangescab.jpeg" alt="Orange" />
  <div className="precaution-details">
    <h2>Orange Diseases Precaution:</h2>
    <ul>
      <li>Identify the specific disease affecting your orange trees.</li>
      <li>Implement proper watering practices to avoid waterlogged soil.</li>
      <li>Regularly inspect your orange trees for any signs of diseases and take immediate action.</li>
    </ul>
  </div>
</section>

    </div>
  );
};

export default Precaution;