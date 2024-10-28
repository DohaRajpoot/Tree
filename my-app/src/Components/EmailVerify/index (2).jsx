
import React, { useState, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../../images/success.png";
import styles from "./styles.module.css";

const EmailVerify = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        setIsLoading(true); // Set loading state

        const url = `http://localhost:7000/api/users/${param.id}/verify/${param.token}`;
		
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      } finally {
        setIsLoading(false); // Clear loading state 
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <Fragment>
      {isLoading ? (
        <div className={styles.container}>
          
          <p>Verifying email...</p>
        </div>
      ) : validUrl ? (
        <div className={styles.container}>
          <img src={success} alt="success_img" className={styles.success_img} />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className={styles.green_btn}>Login</button>
          </Link>
        </div>
      ) : (
        <div className={styles.container}>
          <h1>Verification failed</h1>
          {/* Optionally, display a more specific error message here */}
          <p>An error occurred during verification. Please try again later.</p>
        </div>
      )}
    </Fragment>
  );
};

export default EmailVerify;
