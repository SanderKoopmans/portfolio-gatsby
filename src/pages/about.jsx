import React from 'react';
import Footer from '../components/Footer/Footer';
import SubBar from '../components/SubBar/SubBar';
import Wrapper from '../components/Wrapper';
import { H2, H3, P } from '../components/Font';
import medals from './medals.jpg';
import motor from './motor.jpg';

const About = () => {
  return (
    <>
      <SubBar />
      <Wrapper className='page-wrapper'>
        <Wrapper className='content-wrapper'>
          <H2>Over mij</H2>
          <div className="sub-container">
            <H3>Retail</H3>
            <P>Ik heb een achtergrond in retail. In deze tijd heb ik veel kunnen leren over het coachen van mensen en aansturen van teams. Tot voor kort had ik altijd de mogelijkheden om te groeien en nieuwe dingen te <span className="span-highlight">leren</span>. De IT had altijd mijn interesse en ik experimenteerde met python. Een taal die bijna leesbaar is, dus leek het mij een goed begin.</P>
            <P>Ik ben altijd opzoek naar uitdagingen. In mijn werk of daarbuiten. In mijn retail tijd was ik altijd in de mogelijkheid om zelf teams samen te stellen. Daardoor kon ik veel sporten, destijds was dat volleybal op hoog niveau. Regulier in de zaal, zomers op het strand.</P>
          </div>
          <div className="sub-container">
            <H3>Marqt</H3>
            <div className="content-columns">
              <div className="content-left">
                <div className="img-container">
                  <img src={medals} alt='Various medals hanging on the wall' />
                </div>
              </div>
              <div className="content-right">
                <P>Op een gegeven moment heb ik een switch gemaakt naar Marqt. Volleybal werd op een lager pitje gezet. En later vervangen door het lopen van <span className="span-highlight">marathons</span>.</P>
                <P>Werk bracht nieuwe <span className="span-highlight">uitdagingen</span> in het openen van winkels, herbouwen en het realiseren van groei. Om tenslotte een mooie en leerzame tijd door te brengen bij Marqt keuken.</P>
                <P>On the side, was er een wijn-import. Mijn interesse in de IT zorgde ervoor dat er binnen no-time een website en webshop gebouwd waren. In dit geval gebruik makende van Wordpress.</P>
              </div>
            </div>
          </div>
          <div className="sub-container">
            <H3>Switch</H3>
            <div className="content-columns">
              <div className="content-left">
                <P>Begin 2020 heb ik de keus gemaakt om een switch te maken naar de IT. Na het bekijken van verschillende bootcamps en traineeship heb ik gekozen voor <a href="https://salt.study" target="_blanc">School of Applied Technology</a></P>
                <P>Na een intense periode heb ik de opleiding succesvol afgerond en ben ik nu opzoek naar een baan als <span className="span-highlight">Front-end developer</span>, web developer of full stack developer. Mijn voorkeur gaat uit naar JavaScript developer in combinatie met React. Maar een mooie kans met bijvoorbeeld PHP in het pakket ga ik niet uit de weg!</P>
                <P>Is er tijd over, dan maak ik graag een tour op de motor!</P>
              </div>
              <div className="content-right">
                <div className="img-container">
                  <img src={motor} alt='Touring on the motorbike' />
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default About;
