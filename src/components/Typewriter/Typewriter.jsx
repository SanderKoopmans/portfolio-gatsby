import React, { useState, useEffect } from 'react';
import { StyledSpan } from './Typewriter.styled';

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 150,
}

const TypeWriter = ({ messages }) => {
  const [state, setState] = useState({
    text: '',
    message: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = '';
    const handleType = () => {
      setState(cs => ({
        ...cs,
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs)
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting, state.typingSpeed]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState(cs => ({
          ...cs,
          isDeleting: true
        }))
      }, 500);
    } else if (state.isDeleting && state.text === '') {
      setState(cs => ({
        ...cs,
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages)
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState) {
    return currentState.isDeleting 
    ? currentState.message.substring(0, currentState.text.length -1) 
    : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting ? CONSTANTS.TYPING_SPEED : CONSTANTS.DELETING_SPEED;
  }

  return (
    <>
      <span>{state.text}</span>
      <StyledSpan id='cursor' />
    </>
  )
}

export default TypeWriter;
