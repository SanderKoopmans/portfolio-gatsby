import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StyledFooter } from './Footer.styled';
import MyArrow from './ChevronRight.styled';
import ContactSide from '../ContactSide/ContactSide';

const Footer = () => {
  const [contactSideOpen, setContactSideOpen] = useState(false);

  return (
    <StyledFooter>
      <div className="footer-tagline">
        <h6>Got a project in mind?</h6>
      </div>
      <div 
        className="footer-cta"
        contactSideOpen={contactSideOpen}
        onClick={() => setContactSideOpen(!contactSideOpen)} >
        <h1>Let's talk</h1><MyArrow />
      </div>
      <ContactSide 
        contactSideOpen={contactSideOpen}
        setContactSideOpen={setContactSideOpen} />
      <div className="footer-close">
        <p className="footer-copy">Copyright 2020 <Link to="/">Sander Koopmans</Link></p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
