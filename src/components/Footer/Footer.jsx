import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StyledFooter } from './Footer.styled';
import MyArrow from './ChevronRight.styled';
import ContactSide from '../ContactSide/ContactSide';

const Footer = () => {
  const [contactSideOpen, setContactSideOpen] = useState(false);

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      setContactSideOpen(true);
    }
  }

  return (
    <StyledFooter>
      <div className="footer-tagline">
        <h6>Developer nodig? Een vraag? Contact maken?</h6>
      </div>
      <div 
        className="footer-cta"
        role="button"
        contactSideOpen={contactSideOpen}
        onClick={() => setContactSideOpen(!contactSideOpen)}
        onKeyDown={e => handleKeyDown(e)}
        tabIndex={0} >
        <h1>Let's talk</h1><MyArrow />
      </div>
      <ContactSide 
        contactSideOpen={contactSideOpen}
        setContactSideOpen={setContactSideOpen} />
      <div className="footer-close text-center">
        <p className="footer-copy">Copyright 2020 <Link to="/">Sander Koopmans</Link></p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
