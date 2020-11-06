import React from 'react';
import { P } from '../Font';
import { Link } from 'gatsby';
import Introduction from '../Introduction/Introduction';
import profile from './profile.jpg';

const IntroAbout = () => {
  return (
    <Introduction 
      image={profile} 
      imageAlt='Profile picture of Sander'
      intro='Hi, ik ben ' 
      name='Sander'
      title='Fullstack JavaScript Developer'>
        <P>Ik bouw websites, apps en software. En leer elke dag iets nieuws.</P>
        <P>Begin 2020 heb ik mijn baan opgezegd bij Marqt. En ben ik mijn programmeer avontuur begonnen bij de coding bootcamp van School of Applied Technology. <Link to="/about">Lees verder... ></Link></P>
      </Introduction>
  );
};

export default IntroAbout;
