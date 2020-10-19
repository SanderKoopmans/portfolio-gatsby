import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks/hooks';
import { Link } from 'gatsby';
import MobileBurger from '../Burger/MobileBurger';
import MobileMenu from '../Menu/Menu';
import { StyledTopBar, StyledLogo } from '../Hero/Hero.styled';

const SubBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setMobileMenuOpen(false));

  return (
    <StyledTopBar className="topBar scrolled">
      <StyledLogo className="logo scrolled">          
        <Link 
          to="/"
          id="homeLink">
            SK
        </Link>
      </StyledLogo>
      <div id="MobileMenu" ref={node}>
          <MobileBurger 
            mobileMenuOpen={mobileMenuOpen} 
            setMobileMenuOpen={setMobileMenuOpen} />
          <MobileMenu 
            mobileMenuOpen={mobileMenuOpen} 
            setMobileMenuOpen={setMobileMenuOpen} />
        </div>
    </StyledTopBar>
  )
}

export default SubBar;
