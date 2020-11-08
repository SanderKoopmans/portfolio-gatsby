import React from 'react';
import { H2, P } from '../Font';
import { OL } from '../List';
import Introduction from '../Introduction/Introduction';
import nomad from './Nomad_screen.jpg';

const PortfolioContainer = () => {
  return (
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
    </Introduction>
  );
};

export default PortfolioContainer;
