import React from 'react';
import { H3, H4, P } from '../Font';
import { StyledList } from './Features.styled';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SpeedIcon from '@material-ui/icons/Speed';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const Features = () => {
  return (
    <>
      <H3>Standaard geleverd</H3>
      <StyledList>
        <li><TrendingUpIcon/> <H4>SEO</H4><P>SEO oftewel, search engine optimization. De manier om online meer traffic te genereren naar jouw website. Ik zorg ervoor dat de basis goed verzorgd is.</P></li>
        <li><SpeedIcon /> <H4>Bliksem snel</H4><P>Tegenwoordig heeft iedereen minder tijd of geduld. Jouw website moet hiervoor supersnel laden en reageren. Een snellere website wordt daarbij ook beter beloond door bijvoorbeeld Google met een hogere ranking in de zoekresultaten.</P></li>
        <li><AccessibilityIcon /> <H4>Toegankelijk</H4><P>Een groot gedeelte van de bevolking heeft een beperking in bijvoorbeeld het zien van kleuren. Of een andere vorm waardoor het moeilijker is om met een website te interacteren. Hier hou ik rekening mee in al het werk, zodat iedereen online zichzelf ook welkom voelt!</P></li>
      </StyledList>
    </>
  );
};

export default Features;
