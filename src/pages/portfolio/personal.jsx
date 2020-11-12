import React from 'react';
import { Link } from 'gatsby';
import Footer from '../../components/Footer/Footer';
import SubBar from '../../components/SubBar/SubBar';
import Wrapper from '../../components/Wrapper';
import { H2, P } from '../../components/Font';
import { StyledPortfolioItem } from './PortfolioItem.styled';
import { Table } from '../../components/Table';
import  portfolio from './personal_menu.jpg';

const Personal = () => {
  return (
    <>
      <SubBar />
      <Wrapper className='page-wrapper'>
        <Wrapper className='content-wrapper'>
          <StyledPortfolioItem className="content-container">
            <div className="sub-container">
              <H2>sanderkoopmans.nl</H2>
              <P>Mijn persoonlijke portfolio website. Is het gek om deze hier tussen te zetten? Ik denk het niet, lees verder!</P>
              <Table>
                <tbody>
                  <tr>
                    <th>Soort</th>
                    <th>Stack</th>
                    <th>Code</th>
                    <th>Demo</th>
                  </tr>
                  <tr>
                    <td>Personal</td>
                    <td>Gatsby</td>
                    <td><a href="https://github.com/SanderKoopmans/portfolio-gatsby" target="_blanc">Repository</a></td>
                    <td><Link to="/">Home</Link></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>React</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Styled-Components</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="image-container">
              <img 
                src={portfolio}
                className="itemScreenshot smaller" />
            </div>
            <div className="sub-container">
              <H2>Project Goal</H2>
              <P>In eerste plaats is het doel van deze site om een plek te hebben waar ik kan experimenteren. Daarnaast is het een mooie plek om mijn verhaal rondom gemaakte projecten te kunnen delen.</P>
              <P>Door het hebben van deze website leer ik meer over onder andere servers, en hoe daarmee om te gaan. Contact formuliertje? Simpel met NodeJS & ExpressJS, als dat draait op je hosting...</P>
              <P>Dit project ondergaat continu veranderingen. Bijvoorbeeld toevoegen van accessibility features & dynamische content</P>
            </div>
            <div className="sub-container">
              <div className="content-columns">
                <div className="content-left">
                  <span className="span-skills">Gatsby</span>
                  <span className="span-skills">React</span>
                  <span className="span-skills">Styled-Components</span>
                </div>
                <div className="content-right">
                  <H2>Tech keuzes</H2>
                  <P>Voor dit project maak ik gebruik van Gatsby. Dit stelt mij in staat om een Server Side Rendered site te maken. Wat voordelen op levert bij SEO. Daarnaast integreert Gatsby naadloos met React, wat het ontwikkelen een stuk eenvoudiger maakt. Door het toevoegen en hergebruiken van verschillende componenten.</P>
                  <P>Voor de styling maak ik gebruik van styled-components. Dit zorgt ervoor dat alle styling wordt toegepast op het juiste component. Zonder dat ik mij druk hoef te maken om naams verwarring.</P>
                </div>
              </div>
            </div>
            <div className="sub-container">
              <H2>Problemen en gedachten</H2>
              <P>Ik dacht in eerste instantie een website te maken volledig met React als SPA. Echter is dit nadelig voor zoekmachines.</P>
              <P>Hierdoor ben ik mij gaan verdiepen in SEO met name het verschil in een SPA en MPA. Dit heeft mij veel geleerd over wanneer een render plaats vindt. Wanneer de bezoeker met de site kan interacteren en de ervaren snelheid van de pagina.</P>
            </div>
            <div className="sub-container">
              <H2>Learnings</H2>
              <P>Dit project is mijn experiment en mijn showcase. Ik leer veel over SEO, React, Gatsby en Hosting. Voor mijn contact formulier heb ik mij verdiept in PHP, dit draait vlekkeloos op mijn hosting zonder toevoegingen of omwegen.</P>
              <P>Voor de toekomst ga ik ervoor zorgen dat content geladen wordt door een markdown file of vergelijkbaar. Op dit moment is een groot gedeelte nog geschreven in de codebase. Dit wil ik scheiden, maar voor MVP is het goed genoeg.</P>
            </div>
          </StyledPortfolioItem>
        </Wrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Personal;
