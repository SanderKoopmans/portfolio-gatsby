import React from 'react';
import Footer from '../../components/Footer/Footer';
import SubBar from '../../components/SubBar/SubBar';
import Wrapper from '../../components/Wrapper';
import { H2, P } from '../../components/Font';
import { StyledPortfolioItem } from './PortfolioItem.styled';
import { Table } from '../../components/Table';
import mealplanner from '../../components/PortfolioContainer/Meal_planner2.jpg';

const Mealplanner = () => {
  return (
    <>
      <SubBar />
      <Wrapper className='page-wrapper'>
        <Wrapper className='content-wrapper'>
          <StyledPortfolioItem className="content-container">
            <div className="sub-container">
              <H2>Mealplanner</H2>
              <P>De mealplanner was een project gebouwd voor de hackday van School of Applied Technology. Er stond 24uur voor, van idee tot MVP.</P>
              <Table>
                <tbody>
                  <tr>
                    <th>Soort</th>
                    <th>Stack</th>
                    <th>Code</th>
                  </tr>
                  <tr>
                    <td>Hackday</td>
                    <td>React</td>
                    <td><a href="https://github.com/SanderKoopmans/meal-planner">Repository</a></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>ExpressJS</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>REST API</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="image-container">
              <img 
                src={mealplanner}
                className="itemScreenshot" />
            </div>
            <div className="sub-container">
              <H2>Project Goal</H2>
              <P>Het doel van het project was om een MVP te bouwen. Die tenminste gebruik maakte van een front-end in combinatie met een backend. Dit mocht met een database of API zijn.</P>
              <P>Mijn idee was om een mealplanner te bouwen, waar je recepten kan zoeken en opslaan. Om als resultaat je weekmenu samen te stellen.</P>
            </div>
            <div className="sub-container">
              <div className="content-columns">
                <div className="content-left">
                  <span className="span-skills">React</span>
                  <span className="span-skills">ExpressJS</span>
                  <span className="span-skills">REST API</span>
                </div>
                <div className="content-right">
                  <H2>Tech keuzes</H2>
                  <P>Voor dit project heb ik gekozen om van React gebruik te maken. Het is een SPA en er hoeft geen rekening gehouden te worden met SEO bijvoorbeeld.</P>
                  <P>De app is lichtgewicht waardoor de gebruiker snel informatie op het scherm ziet. React in combinatie met ExpressJS als backend voorzag in al mijn eisen.</P>
                  <P>De API is van edamam.</P>
                </div>
              </div>
            </div>
            <div className="sub-container">
              <H2>Problemen en gedachten</H2>
              <P>Dit project is gebouwd toen we net met React waren begonnen. Natuurlijk bouw je dan iets met React <span className="span-highlight">;)</span></P>
              <P>Een van de eerste uitdagingen was state-management. Het op de juiste manier verwerken van de fetch request tot en met het antwoord van de API.</P>
            </div>
            <div className="sub-container">
              <H2>Learnings</H2>
              <P>De grootste les is geweest om meer tijd te investeren in het maken van een plan. Nu was het snel beginnen met bouwen omwille van de tijdsdruk, gaat het wel lukken?!</P>
              <P>Het andere <span className="span-highlight">aha-moment</span> om wanneer je vast zit, stap terug te nemen. En terug op te bouwen met kleine stappen en testen. Zodat je niet een te grote hoeveelheid wijzigingen aanbrengt en je niet weet waar de fout zit.</P>
            </div>
          </StyledPortfolioItem>
        </Wrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Mealplanner;
