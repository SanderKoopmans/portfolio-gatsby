import React, { useState, useRef, useEffect } from 'react';
import { useOnClickOutside, useWindowDimensions } from '../../hooks/hooks';
import { Link } from 'gatsby';
import MobileBurger from '../Burger/MobileBurger';
import MobileMenu from '../Menu/Menu';
import { StyledHero, StyledTopBar, StyledLogo } from './Hero.styled';

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topbar, setTopbar] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setMobileMenuOpen(false));

  const { height } = useWindowDimensions();
  const adjustedHeight = height - 35;
  
  const changeTopBar = () => {
    if (window.scrollY >= adjustedHeight) {
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
        <h1 className="mainTitle">Sander Koopmans</h1>
        <p className="mainIntro">Dutch web developer using react.js, node.js and material-ui</p>
      </div>
    </StyledHero>
  );
};

export default Hero;
