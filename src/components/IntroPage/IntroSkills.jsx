import React from 'react';
import { H3, P } from '../Font';
import { Link } from 'gatsby';

const IntroSkills = () => {
  return (
    <>
      <H3>Tech Skills</H3>
      <P>Een selectie van mijn tech skills:</P>
      <div className="content-container">
        <span className='span-skills'>React | Redux</span>
        <span className='span-skills'>JavaScript</span>
        <span className='span-skills'>HTML5 | CSS</span>
        <span className='span-skills'>GitHub</span>
        <span className='span-skills'>Docker</span>
        <span className='span-skills'>NodeJS</span>
        <span className='span-skills'>ExpressJS</span>
        <span className='span-skills'>REST APIs</span>
      </div>
      <div className="content-container">
        <H3>Ik werk nu aan:</H3>
        <P>Op dit moment ontwikkel ik mij verder op het gebied van Gatsby in combinatie met React. Met als verdere doel om deze website te bouwen headless CMS op basis van Wordpress.</P>
        <P>Door het volgen van deze route bouw ik verder op mijn ervaring met REST APIs. En daarnaast werk ik met Docker voor het ontwikkelen van de Wordpress backend.</P>
        <P>Ben je nieuwsgierig naar afgeronde projecten? Kijk dan verder op mijn <Link to='/portfolio'>portfolio pagina... ></Link></P>
      </div>
    </>
  );
};

export default IntroSkills;
