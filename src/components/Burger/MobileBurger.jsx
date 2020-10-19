import React from 'react';
import { StyledBurger } from './MobileBurger.styled';

const MobileBurger = ({ mobileMenuOpen, setMobileMenuOpen }) => {

  return (
    <StyledBurger
      mobileMenuOpen={mobileMenuOpen}
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)} >
      <div className="burgerBar"/>
      <div className="burgerBar"/>
      <div className="burgerBar"/>
    </StyledBurger>
  )
}

export default MobileBurger;
