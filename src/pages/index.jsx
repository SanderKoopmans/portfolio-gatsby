import React from 'react';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Wrapper from '../components/Wrapper';
import Intro from '../components/Intro/Intro';
import MainSection from '../components/Main/MainSection';

const Home = () => {
  return (
    <>
      <div className="heroWrapper">
        <Hero />
      </div>
      <Wrapper className='content-wrapper'>
        <Intro />
        <MainSection />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
