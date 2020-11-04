import React from 'react';
import { H2, H4, P } from '../Font';
import { Link } from 'gatsby';

const IntroAbout = () => {
  return (
    <>
      <H2>Hi, Ik ben <span className='span-highlight'>Sander</span></H2>
      <H4>Fullstack JavaScript Developer</H4>
      <P>Ik bouw website's, apps en andere software met de eindgebruiker in gedachten.</P>
      <P>Begin 2020 heb ik mijn baan opgezegd bij Marqt. En ben ik mijn programmeer avontuur begonnen bij de coding bootcamp van School of Applied Technology. <Link to="/about">Lees verder...</Link></P>
    </>
  );
};

export default IntroAbout;
