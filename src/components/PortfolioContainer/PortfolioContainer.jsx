import React from 'react';
import { Link } from 'gatsby';
import { H2, P } from '../Font';
import { OL } from '../List';
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
        <P>Na het afronden van de opleiding, ben ik begonnen met mijn persoonlijke website. Dit is mijn plek om technieken te testen en showcasen.</P>
        <Link to='/portfolio/personal' className='button'>Bekijk project</Link>
      </Introduction>
      <Introduction
        className='introduction-img'
        image={nomad} 
        imageAlt='Screenshot of Nomad website' 
        intro='Final project '
        name='Nomad' 
        title='</Salt> Final Project'>
        <P>Als eindproject voor School of Applied Technology werd ons gevraagd een project te bouwen om al ons geleerde in de praktijk te brengen.</P>
        <P>Deze moest aan de volgende eisen voldoen:</P>
        <OL>
          <li>Full Stack Applicatie</li>
          <li>Binnen 2 weken gebouwd</li>
          <li>Duidelijke probleemstelling</li>
        </OL>
        <span className='span-skills'>React</span>
        <span className='span-skills'>ExpressJS</span>
        <span className='span-skills'>REST APIs</span>
        <span className='span-skills'>FireBase</span>
      </Introduction>
      <Introduction
        className='introduction-img'
        image={mealplanner} 
        imageAlt='Screenshot of Meal planner' 
        intro='Hackday project '
        name='Meal Planner' 
        title='</Salt> Hackday Project'>
        <P>Tegen het einde van de opleiding kregen we de opdracht om binnen een dag een project te bouwen.</P>
        <P>We moesten zelf met het idee komen, gebruik maken van een front-end en back-end. In combinatie met een API of database.</P>
        <span className='span-skills'>React</span>
        <span className='span-skills'>ExpressJS</span>
        <span className='span-skills'>REST APIs</span>
      </Introduction>
    </>
  );
};

export default PortfolioContainer;
