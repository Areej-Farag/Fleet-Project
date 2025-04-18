import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import ImageComponent from '../Atoms/ImageComponent';
import Typography from '../Atoms/Typograph';
import NewsletterForm from '../Molecules/NewsLetterForm';
import '../Styles/organisms.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
        <ImageComponent src={logo} alt="Fleet Logo" width={24} height={24} />
        <Typography variant="h5" className="footer-brand">Fleet</Typography>
        </div>

        <div className="footer-links">
  <Link to="/about">About</Link>
  <Link to="/what-we-do">What We Do</Link>
  <Link to="/jobs">Jobs</Link>
  <Link to="/projects">Projects</Link>
  <Link to="/press">Press</Link>
  <Link to="/download">Download</Link>
</div>


        <NewsletterForm />
      </div>

      <div className="footer-bottom">
        <Typography variant="caption">
          copyright© 2021 UI8 LLC. All rights reserved
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
