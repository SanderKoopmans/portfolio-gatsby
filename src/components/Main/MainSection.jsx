import React from 'react';
import { H4, P } from '../Font';
import { StyledList } from '../Features/Features.styled';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FastForwardIcon from '@material-ui/icons/FastForward';
import BuildIcon from '@material-ui/icons/Build';
import PeopleIcon from '@material-ui/icons/People';

const MainSection = () => {
  return (
    <>
      <H4>Why me?</H4>
      <P>Waarom werken met mij en niemand anders?</P>
      <StyledList>
        <li>
          <PeopleIcon />
          <H4>Persoonlijk</H4>
          <P></P>
        </li>
        <li>
          <BuildIcon />
          <H4>Maatwerk</H4>
          <P></P>
        </li>
        <li>
          <FastForwardIcon />
          <H4>Snelle service</H4>
          <P></P>
        </li>
        <li>
          <NotInterestedIcon />
          <H4>Geen uitbesteding</H4>
          <P></P>
        </li>
      </StyledList>
    </>
  );
};

export default MainSection;
