import React from 'react';
import { H3, P } from '../Font';
import BuildIcon from '@material-ui/icons/Build';

const IntroSkills = () => {
  return (
    <>
      <H3>Tech Skills</H3>
      <P>Een selectie van mijn tech skills op dit moment.</P>
      <div className="tech-skills">
        <span className='span-skills'>React | Redux</span>
        <span className='span-skills'>JavaScript</span>
        <span className='span-skills'>HTML5 | CSS</span>
        <span className='span-skills'>GitHub</span>
        <span className='span-skills'>Docker</span>
        <span className='span-skills'>NodeJS</span>
        <span className='span-skills'>ExpressJS</span>
        <span className='span-skills'>REST APIs</span>
      </div>
      <P>Op dit moment ontwikkel ik mij verder op het gebied van Gatsby in combinatie met React. Met als verdere doel om deze website te bouwen headless CMS op basis van Wordpress.</P>
    </>
  );
};

export default IntroSkills;
