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
          <P>Na jaren in de retail te hebben gewerkt, en daarnaast op hoog niveau te sporten. Heb ik begin 2020 mijn baan opgezegd bij Marqt. En ben ik mijn avontuur begonnen bij de coding bootcamp van School of Applied Technology.</P>
          <P>Ik heb altijd een project in de maak om nieuwe technieken te proberen.</P><Link to="/about" className="button">Naar Over Mij</Link>
        </Introduction>
    </div>
  );
};

export default IntroAbout;
