import React from 'react';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Wrapper from '../components/Wrapper';
import Intro from '../components/Intro/Intro';

const Home = () => {
  return (
    <>
      <div className="heroWrapper">
        <Hero />
      </div>
      <Wrapper className='content-wrapper'>
        <Intro />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
