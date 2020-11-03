import React from 'react';
import { H2, P } from '../Font'; 
import Features from '../Features/Features';

const Intro = () => {
  return (
    <>
      <H2>Ben je opzoek naar een <span className='span-highlight'>nieuwe website</span>, <span className='span-highlight'>app</span> of is het tijd voor een <span className='span-highlight'>update</span>?</H2>
      <P>Een moderne website, gebouwd volgens moderne standaarden. Wordt door zoekmachines sneller gevonden en hoger in de resultaten geplaatst. </P><P>Wat er voor zorgt dat er meer potentiele klanten op jou website terecht komen.</P>
      <Features />
    </>
  );
};

export default Intro;
