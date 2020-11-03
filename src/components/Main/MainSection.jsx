import React from 'react';
import { H4, P } from '../Font';
import { StyledList } from '../Features/Features.styled';

const MainSection = () => {
  return (
    <>
      <H4>Why me?</H4>
      <P>Waarom werken met mij en niemand anders?</P>
      <StyledList>
        <li>Persoonlijk</li>
        <li>Maatwerk</li>
        <li>Snelle service</li>
        <li>Geen uitbesteding</li>
      </StyledList>
    </>
  );
};

export default MainSection;
