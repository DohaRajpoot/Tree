
import React, { useState } from 'react';
import axios from 'axios';
import './Detection.css';

const Detection = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setUploadedImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePrediction = async () => {
    if (!uploadedImage) return;

    const fileInput = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    setLoading(true);
    setPrediction(null);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPrediction(response.data.disease_name);
    } catch (error) {
      console.error('Error uploading the image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="detection-page-container">
      <section className="description-section">
        <h2>Fruiting Plant Disease Detection</h2>
        <p>
          Detecting diseases in fruiting plants is crucial for maintaining their health. This page allows you to upload images for analysis and provides information about symptoms related to Peach Scab, Orange Disease, and Apple Rot.
        </p>
      </section>

      <section className="image-upload-section">
        <h2>Upload Image for Analysis</h2>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
        {uploadedImage && (
          <button className="predict-btn" onClick={handlePrediction} disabled={loading}>
            {loading ? 'Predicting...' : 'Predict'}
          </button>
        )}
        {prediction && <p>Predicted Disease: {prediction}</p>}
      </section>

      <section className="symptoms-section">
        <h2>Symptoms</h2>
        <div className="disease-symptoms">
          <h3>Peach Scab</h3>
          <ul>
            <li>Black spots on leaves and fruit.</li>
            <li>Leaves may become distorted and fall prematurely.</li>
            <li>Fruit may have raised, scaly spots.</li>
          </ul>
        </div>

        <div className="disease-symptoms">
          <h3>Orange Disease</h3>
          <ul>
            <li>Yellowing of leaves.</li>
            <li>Leaf drop and dieback of branches.</li>
            <li>Abnormal growths on fruit and leaves.</li>
          </ul>
        </div>

        <div className="disease-symptoms">
          <h3>Apple Rot</h3>
          <ul>
            <li>Dark, sunken spots on fruit.</li>
            <li>Foul smell and softening of affected areas.</li>
            <li>White fungal growth may appear on the surface.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Detection;
