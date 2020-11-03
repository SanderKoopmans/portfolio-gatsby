import React from 'react';
import { H2, P } from '../Font'; 
import Features from '../Features/Features';

const Intro = () => {
  return (
    <>
      <H2>Ben je opzoek naar een <span className='span-highlight'>nieuwe website</span>, app of is het tijd voor een <span className='span-highlight'>update</span>?</H2>
      <P>Een moderne website, die gebouwd is volgens moderne standaarden. Wordt door zoekmachines sneller gevonden en hoger in de resultaten geplaatst.</P>
      <Features />
      [test]
    </>
  );
};

export default Intro;
