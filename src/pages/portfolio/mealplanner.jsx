import React from 'react';
import Footer from '../../components/Footer/Footer';
import SubBar from '../../components/SubBar/SubBar';
import Wrapper from '../../components/Wrapper';
import { H2, P } from '../../components/Font';
import { StyledPortfolioItem } from './PortfolioItem.styled';
import { Table } from '../../components/Table';
import nomad from '../../components/PortfolioContainer/Nomad_screen.jpg';

const Mealplanner = () => {
  return (
    <>
      <SubBar />
      <Wrapper className='page-wrapper'>
        <Wrapper className='content-wrapper'>
          <StyledPortfolioItem className="content-container">
            <div className="sub-container">
              <H2>Nomad</H2>
              <P>Nomad is gebouwd als eindproject voor School of Applied Technology samen met <a href="https://github.com/Eemelinen" className="bold">Eemeli</a>, <a href="https://github.com/Kennettimmers" className="bold">Kennet</a> & <a href="https://github.com/mhlgoossens" className="bold">Marc</a>. We hebben besloten om een CMS te bouwen als platform voor developers. Een plek om elkaar te helpen en samen buddy- (MOB)- programming sessies te plannen.</P>
              <Table>
                <tbody>
                  <tr>
                    <th>Soort</th>
                    <th>Stack</th>
                    <th>Code</th>
                    <th>Demo</th>
                  </tr>
                  <tr>
                    <td>Team project</td>
                    <td>React</td>
                    <td><a href="https://github.com/ellipsisMob/nomad">Repository</a></td>
                    <td><a href="https://www.youtube.com/watch?v=o5sWn9y_rU4&feature=youtu.be">Youtube</a></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>ExpressJS</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Firebase</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Heroku</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <img 
              src={nomad}
              className="itemScreenshot" />
            <div className="sub-container">
              <H2>Project Goal</H2>
              <P>We hebben besloten om dit project te bouwen, omdat er naar ons inzicht geen plaats is om technische vraagstukken te combineren met het plannen van sessies om elkaar te helpen.</P>
              <P>We hadden voor het totale project 10 werkdagen. Er gingen 2 dagen zitten in het voorstel maken en goedkeuring krijgen van de instructeurs.</P>
            </div>
            <div className="sub-container">
              <div className="content-columns">
                <div className="content-left">
                  <span className="span-skills">React</span>
                  <span className="span-skills">ExpressJS</span>
                  <span className="span-skills">Firebase</span>
                  <span className="span-skills">Heroku</span>
                </div>
                <div className="content-right">
                  <H2>Tech keuzes</H2>
                  <P>Voor dit project hebben we gekozen om gebruik te maken van React. De snelheid van de applicatie en het hergebruiken van componenten was hiervoor doorslag gevend.</P>
                  <P>Daarnaast hebbe we gebruik gemaakt van ExpressJS om onze backend in te richten. We hebben verschillende routes gebouwd voor CRUD doeleinden.</P>
                  <P>Firebase host onze data en Heroku zorgt voor de CD via Github.</P>
                </div>
              </div>
            </div>
            <div className="sub-container">
              <H2>Problemen en gedachten</H2>
              <P>Een van de grootste uitdagingen zat in het ontwerpen en bedenken van features passend binnen de tijdspan.</P>
              <P>We hebben gekozen om te zorgen voor een MVP die vanaf het begin live stond. En zijn na het ruwe werk verder gegaan met verfijnen door telkens een feature toe te voegen.</P>
              <P>Een andere uitdaging zat in de text-editor. We willen gebruikers de mogelijkheid bieden om hun eigen text opmaak te bepalen. En deze door de site ook precies zo te renderen. De gebruikte editor bouwde een complexe array met daarin verschillende objecten om de data op te slaan in onze database.</P>
            </div>
            <div className="sub-container text-center">
              <H2>Learnings</H2>
              <P>Dit project heeft mij persoonlijk veel geleerd over het zelf sturen van een groter project. Verschillende taken wegzetten en samen naar één doel toe werken. Zonder precies te weten welke uitdagingen we onderweg tegen zouden komen.</P>
              <P>We stonden er vanaf het begin af aan volledig zelf voor, de enige steun van instructeurs was op het technische vlak als we er zelf echt niet meer uit kwamen.</P>
            </div>
          </StyledPortfolioItem>
        </Wrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Mealplanner;
