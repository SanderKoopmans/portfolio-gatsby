import React, { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from '../../hooks/hooks';
import { Link } from 'gatsby';
import MobileBurger from '../Burger/MobileBurger';
import MobileMenu from '../Menu/Menu';
import { H1 } from '../Font';
import { StyledHero, StyledTopBar, StyledLogo } from './Hero.styled';

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topbar, setTopbar] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setMobileMenuOpen(false));


  
  const changeTopBar = () => {
    if (window.scrollY >= 630) {
      setTopbar(true);
    } else {
      setTopbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeTopBar);
  })

  return (
    <StyledHero>
      <StyledTopBar className={topbar ? 'topBar scrolled' : 'topBar'}>
        <StyledLogo 
          className={topbar ? 'logo scrolled' : 'logo'}> 
          <Link 
            to="/"
            id="homeLink">
              SKoopmans
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
      <div className="headerContent">
        <H1 className="mainTitle">Sander Koopmans</H1>
        <p className="mainIntro">Dutch web developer using react.js, node.js and material-ui</p>
      </div>
    </StyledHero>
  );
};

export default Hero;
