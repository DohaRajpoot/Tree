import React  from 'react';
import './Treatment.css'; 

const Treatment = () => {
  return (
    <div>
      <header>
        <h1>Treatment Service</h1>
      </header>

      <h2>APPLE </h2>
      <section className="Treatment">
        <img src="applee.jpeg" alt="Apple" />
        <div className="Treatment-details">
          <h2>BROWN SPOT</h2>
          <p>
            <b>Description:</b> Brown spots on apple trees are often caused by fungal infections. To treat brown spots, apply a suitable fungicide that is effective against the specific fungus responsible for the condition.
            <br />
            <b>Application Procedure:</b> Follow the recommended dosage and application instructions provided by the fungicide manufacturer. Apply the fungicide during the appropriate season, typically before or during the early stages of symptom development.
            <br />
            <b>Timing:</b> Apply the fungicide as a preventive measure or at the first signs of brown spots on leaves or fruit.
          </p>
        </div>
      </section>

      <section className="Treatment">
        <img src="apple.jpeg" alt="Apple" />
        <div className="Treatment-details">
          <h2>PEST INFESTATION</h2>
          <p>
            <b>Description:</b> Pest infestations in apple trees can lead to holes in leaves and fruit. To control pests, use an appropriate insecticide.
            <br />
            <b>Application Procedure:</b> Apply the insecticide as directed on the product label. Ensure thorough coverage of leaves and fruit surfaces, especially targeting areas where insects are present.
            <br />
            <b>Timing:</b> Apply the insecticide when pests are actively feeding, typically during their peak activity periods.
          </p>
        </div>
      </section>

      <h2>PEACH</h2>
      <section className="Treatment">
        <img src="peachrot.jpeg" alt="Peach" />
        <div className="Treatment-details">
          <h2>PEACH SCAB</h2>
          <p>
            <b>Description:</b> Peach scab is characterized by scab-like lesions on the fruit surface. Control involves the use of fungicides designed to manage scab-causing fungi.
            <br />
            <b>Application Procedure:</b> Apply a fungicide that targets the scab-causing pathogen. Ensure thorough coverage of the peach tree, focusing on the fruit surface and surrounding foliage.
            <br />
            <b>Timing:</b> Initiate fungicide applications preventively or at the earliest signs of scab development. Follow a regular schedule as recommended by the fungicide product.
          </p>
        </div>
      </section>

      <section className="Treatment">
        <img src="peachscab.jpeg" alt="Peach" />
        <div className="Treatment-details">
          <h2>BROWN SPOT</h2>
          <p>
            <b>Description:</b> Brown rot, causing brown spot symptoms on peaches, is often due to fungal infections. Apply a fungicide specifically formulated to control brown rot.
            <br />
            <b>Application Procedure:</b> Follow the fungicide manufacturer's recommendations for application timing and frequency. Begin treatment at the first signs of brown spots, and continue throughout the growing season.
          </p>
        </div>
      </section>

      <h2>ORANGE</h2>
      <section className="Treatment">
        <img src="orangescab.jpeg" alt="Orange" />
        <div className="Treatment-details">
          <h2>ORANGE BLIGHT</h2>
          <p>
            <b>Description:</b> Orange blight affects orange trees and is caused by a specific type of fungus. Use a fungicide designed for treating orange blight.
            <br />
            <b>Application Procedure:</b> Apply the fungicide according to the recommended dosage and instructions provided by the manufacturer. Ensure thorough coverage of affected areas.
            <br />
            <b>Timing:</b> Begin treatment at the first signs of orange blight, and continue on a regular schedule for prevention.
          </p>
        </div>
      </section>

      <section className="Treatment">
        <img src="orangerot.jpeg" alt="Orange" />
        <div className="Treatment-details">
          <h2>ORANGE SCALE</h2>
          <p>
            <b>Description:</b> Orange scale infestations can lead to damage on the fruit and leaves. Control scale insects by using an appropriate insecticide.
            <br />
            <b>Application Procedure:</b> Apply the insecticide as directed on the product label. Ensure thorough coverage of leaves and fruit surfaces, especially targeting areas with scale infestations.
            <br />
            <b>Timing:</b> Apply the insecticide when scale insects are active, typically during their feeding periods.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Treatment;