import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from './favicon.ico';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Wrapper from '../components/Wrapper';
import IntroPage from '../components/IntroPage/IntroPage';

const Home = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SK | JavaScript developer</title>
      </Helmet>
      <div className="heroWrapper">
        <Hero />
      </div>
      <Wrapper className='content-wrapper'>
        <IntroPage />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Home;
