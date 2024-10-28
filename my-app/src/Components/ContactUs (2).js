// import React from 'react';
// import './ContactUs.css';

// const ContactUs = () => {
//   return (
//     <>
//       <header>
//         <h1>Contact Us!</h1>
//       </header>
//       <div className="container">
//         <div className="content">
//           <div className="left-side">
//             <div className="phone details">
//               <i className="fas fa-phone-alt"></i>
//               <div className="topic">Phone</div>
//               <div className="text-one">+003 9893 5647</div>
//               <div className="text-two">+002 3434 5678</div>
//             </div>
//             <div className="email details">
//               <i className="fas fa-envelope"></i>
//               <div className="topic">Email</div>
//               <div className="text-one">abcdgmail@gmail.com</div>
//             </div>
//           </div>
//           <div className="right-side">
//             <div className="topic-text">Send us a message</div>
//             <p>
//               If you have any work from me or any types of queries, you can send
//               a message from here. It's my pleasure to help you.
//             </p>
//             <form action="#">
//               <div className="input-box">
//                 <input type="text" placeholder="Enter your name" />
//               </div>
//               <div className="input-box">
//                 <input type="text" placeholder="Enter your email" />
//               </div>
//               <div className="input-box message-box">
//                 <input type="text" placeholder="Enter your message" />
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   required
//                 ></textarea>
//               </div>
//               <div className="button">
//                 <input type="button" value="Send Now" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
      
//     </>
//   );
// };

// export default ContactUs;

import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:7000/api/contact', formData);
      setSuccessMessage(response.data);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header>
        <h1>Contact Us!</h1>
      </header>
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+003 9893 5647</div>
              <div className="text-two">+002 3434 5678</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">abcdgmail@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of queries, you can send
              a message from here. It's my pleasure to help you.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {successMessage && <div className="success_msg">{successMessage}</div>}
              {errorMessage && <div className="error_msg">{errorMessage}</div>}
              <div className="button">
                <input type="submit" value={loading ? 'Sending...' : 'Send Now'} disabled={loading} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
