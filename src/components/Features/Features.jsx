import React from 'react';
import { H4 } from '../Font';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SpeedIcon from '@material-ui/icons/Speed';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const Features = () => {
  return (
    <>
      <h3>Features</h3>
      <ul>
        <li><TrendingUpIcon/> <H4>SEO</H4></li>
        <li><SpeedIcon /> <H4>Bliksem snel</H4></li>
        <li><AccessibilityIcon /> <H4>Toegankelijk</H4></li>
      </ul>
    </>
  );
};

export default Features;
