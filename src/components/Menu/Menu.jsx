import React from 'react';
import { Link } from 'gatsby';
import { StyledMenu } from './Menu.styled';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const MobileMenu = ({ mobileMenuOpen }) => {
  return (
    <StyledMenu 
      className="MobileMenu" 
      mobileMenuOpen={mobileMenuOpen} >
      <Link to="/about">Over</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <div className="small text-center">
        <a href="https://github.com/SanderKoopmans" target="_blank" className="small"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/sander-koopmans/" target="_blank" className="small"><LinkedInIcon /></a>
        <a href="mailto:info@sanderkoopmans.nl" target="_blank" className="small"><EmailIcon /></a>
      </div>
    </StyledMenu>
  );
};

export default MobileMenu;
