import React from 'react';
import { H3, P } from '../Font';
import PortfolioContainer from '../PortfolioContainer/PortfolioContainer';

const IntroSkills = () => {
  return (
    <>
      <div className="content-container">
        <H3>Mijn Skills</H3>
        <P>Tijdens de studie van <a href="https://salt.study">School of Applied Technology</a> heb ik veel geleerd van het werken in een Agile omgeving volgens de principes van MOB-programming.</P>
        <div className="sub-container text-center">
          <span className='span-skills'>React | Redux</span>
          <span className='span-skills'>JavaScript</span>
          <span className='span-skills'>HTML5 | CSS</span>
          <span className='span-skills'>GitHub</span>
          <span className='span-skills'>Docker</span>
          <span className='span-skills'>NodeJS</span>
          <span className='span-skills'>ExpressJS</span>
          <span className='span-skills'>REST APIs</span>
        </div>
      </div>
      <div className="content-container">
        <H3>Waar ik aan heb gewerkt</H3>
        <P>Ik hou ervan om bezig te blijven en verder te leren en experimenteren. Kijk hier naar een aantal van mijn projecten.</P>
        <PortfolioContainer />
      </div>
    </>
  );
};

export default IntroSkills;
