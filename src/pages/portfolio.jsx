import React from 'react';
import SubBar from '../components/SubBar/SubBar';
import Footer from '../components/Footer/Footer';
import Wrapper from '../components/Wrapper';
import { H2, P } from '../components/Font';
import PortfolioContainer from '../components/PortfolioContainer/PortfolioContainer';

const Portfolio = () => {
  return (
    <>
      <SubBar />
      <Wrapper className='page-wrapper'>
        <Wrapper className='content-wrapper'>
          <H2>Welkom op mijn portfolio!</H2>
          <P>Hier zijn een aantal van mijn projecten te vinden. Met daarbij een korte beschrijving.</P>
          <br />
          <PortfolioContainer />
        </Wrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Portfolio;
