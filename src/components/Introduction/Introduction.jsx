import React from 'react';
import { H2, P } from '../Font';
import { StyledIntroduction } from './Introduction.styled';

const Introduction = ({
  image,
  imageAlt,
  intro,
  name,
  title,
  children
}) => {
  return (
    <StyledIntroduction className="introduction-block">
      <div className="introduction-header">
        <div className="introduction-picture">
          <img 
            className="introduction-img"
            src={image}
            alt={imageAlt} />
        </div>
        <div className="introduction-title">
          <H2>{intro}<span className='span-highlight'>{name}</span></H2>
          <P>{title}</P>
        </div>
      </div>
      <div className="introduction-context">
        {children}
      </div>
    </StyledIntroduction>
  );
};

export default Introduction;
