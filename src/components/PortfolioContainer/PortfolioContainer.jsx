import React from 'react';
import { Link } from 'gatsby';
import { P } from '../Font';
import Introduction from '../Introduction/Introduction';
import nomad from './Nomad_screen.jpg';
import mealplanner from './Meal_planner2.jpg';
import portfolio from './portfolio.jpg';

const PortfolioContainer = () => {
  return (
    <>
      <Introduction
        className='introduction-img'
        image={portfolio} 
        imageAlt='Screenshot of Portfolio website' 
        intro='Personal site '
        name='sanderkoopmans.nl' 
        title='Personal website'>
        <P>Mijn persoonlijke site. Mijn online speeltuin om nieuwe technieken te proberen en mijn werk te laten zien.</P>
        <br />
        <Link to='/portfolio/personal' className='button'>Bekijk project</Link>
      </Introduction>
      <Introduction
        className='introduction-img'
        image={nomad} 
        imageAlt='Screenshot of Nomad website' 
        intro='Final project '
        name='Nomad' 
        title='</Salt> Final Project'>
        <P>Nomad een CMS om developers bij elkaar te brengen en elkaar te helpen, door vragen te kunnen stellen en buddy-programming afspraken te plannen.</P>
        <br />
        <Link to='/portfolio/nomad' className='button'>Bekijk project</Link>
      </Introduction>
      <Introduction
        className='introduction-img'
        image={mealplanner} 
        imageAlt='Screenshot of Meal planner' 
        intro='Hackday project '
        name='Meal Planner' 
        title='</Salt> Hackday Project'>
        <P>Zoek recepten en bewaar ze in je eigen selectie.</P>
        <br />
        <Link to='/portfolio/mealplanner' className='button'>Bekijk project</Link>
      </Introduction>
    </>
  );
};

export default PortfolioContainer;
