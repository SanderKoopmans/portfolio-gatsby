import React from 'react';
import { StyledBurger } from './MobileBurger.styled';

const MobileBurger = ({ mobileMenuOpen, setMobileMenuOpen }) => {

  return (
    <StyledBurger
      mobileMenuOpen={mobileMenuOpen}
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)} >
      <div className={mobileMenuOpen ? "burgerBar openMenu" : "burgerBar"}/>
      <div className={mobileMenuOpen ? "burgerBar openMenu" : "burgerBar"}/>
      <div className={mobileMenuOpen ? "burgerBar openMenu" : "burgerBar"}/>
    </StyledBurger>
  )
}

export default MobileBurger;
