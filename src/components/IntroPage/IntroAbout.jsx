import React from 'react';
import { P } from '../Font';
import { Link } from 'gatsby';
import Introduction from '../Introduction/Introduction';
import profile from './profile.jpg';

const IntroAbout = () => {
  return (
    <div className="content-container">
      <Introduction 
        className='introduction-img clip'
        image={profile} 
        imageAlt='Profile picture of Sander'
        intro='Hi, ik ben ' 
        name='Sander'
        title='Fullstack JavaScript Developer'>
          <P>Ik heb begin 2020 de keuze gemaakt om een carrière in de IT te gaan bouwen.</P>
          <P>Vanaf de middelbare school ontwikkelde zich de interesse in python en experimenteerde ik veel. Hoewel ik jarenlang op hoog niveau heb gesport en ik daarnaast mijn baan in de Retail had, waar ik in verschillende functies ben gegroeid, heb ik begin 2020 mijn baan bij Marqt opgezegd. Om mijn interesse na te jagen. Ik ben mijn avontuur begonnen bij de coding bootcamp van School of Applied Technology.</P><Link to="/about" className="button">Naar Over Mij</Link>
        </Introduction>
    </div>
  );
};

export default IntroAbout;
