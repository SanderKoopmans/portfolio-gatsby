import React from 'react';
import { Link } from 'gatsby';
import { StyledMenu } from './Menu.styled';

const MobileMenu = ({ mobileMenuOpen }) => {
  return (
    <StyledMenu 
      className="MobileMenu" 
      mobileMenuOpen={mobileMenuOpen} >
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </StyledMenu>
  );
};

export default MobileMenu;
