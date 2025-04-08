import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputField from "../Atoms/InputField";
import Button from "../Atoms/Button";
import logo from "../../assets/logo1.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email Submitted: ", email);
  };

  return (
    <footer className="bg-white py-4 border-top footer">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          <div className="col-12 col-md-3 mb-3 d-flex justify-content-center justify-content-md-start">
            <img src={logo} alt="Fleet Logo" width={30} className="me-2" />
            <span className="fw-bold fs-5">fleet</span>
          </div>

          <div className="col-12 col-md-6 mb-3 d-flex flex-column flex-md-row justify-content-center">
            <div className="d-flex flex-wrap justify-content-center">
              <a href="/" className="footer-link me-3">About</a>
              <a href="/" className="footer-link me-3">Projects</a>
              <a href="/" className="footer-link me-3">What We Do</a>
              <a href="/" className="footer-link me-3">Press</a>
              <a href="/" className="footer-link me-3">Jobs</a>
              <a href="/" className="footer-link me-3">Download</a>
            </div>
          </div>

          <div className="col-12 col-md-3 text-center text-md-end">
            <p className="fw-bold mb-2 community-text">JOIN OUR COMMUNITY 🔥</p>
            <div className="d-flex justify-content-center justify-content-md-end">
              <div className="input-container">
                <InputField
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button className="input-button" onClick={handleSubmit}>
                  ➡
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center">
            <p className="text-muted mb-0">© 2021 UIB LLC. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
