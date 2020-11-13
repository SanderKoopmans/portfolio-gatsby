import React from 'react';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Wrapper from '../components/Wrapper';
import IntroPage from '../components/IntroPage/IntroPage';

const Home = () => {
  return (
    <>
      <div className="heroWrapper">
        <Hero />
      </div>
      <Wrapper className='content-wrapper'>
        <IntroPage />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
