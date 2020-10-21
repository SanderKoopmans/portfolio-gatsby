import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  .inputGroup {
    display: inline-flex;
    border: 0;
    padding: 0;
    margin: 8px;
    position: relative;
    min-width: 0;
    flex-direction: column;
    vertical-align: top;
    width: 100%;
  }

  label {
    transform: translate(14px, -6px) scale(0.75);
    position: absolute;
    // z-index: 1;
  }

  label, svg {
    color: ${props => props.theme.mainBgColor};
  }

  .inputBase {
    display: inline-flex;
    padding-left: 14px;
    position: relative;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    cursor: text;
  }

  .inputIcon {
    margin-right: 8px;
    display: flex;
    max-height: 2em;
    align-items: center;
    white-space: nowrap;
  }

  svg {
    font-size: 1.5rem;
    // z-index: 1;
  }

  input, textarea {
    padding: 18.5px 10px 18.5px 0;
    width: 100%;
    border: 0;
    height: 1.2rem;
    margin: 0;
    display: block;
    min-width: 0;
    background: none;
    box-sizing: content-box;
    // z-index: 1;
  }

  textarea {
    height: 5rem;
    font-family: ${props => props.theme.mainFont};
    font-size: 0.8rem;
  }

  fieldset {
    border: none;
    border-radius: 4px;
    top: -5px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 5px 8px 0 8px;
    overflow: hidden;
    position: absolute;
    background: ${props => props.theme.mainWhite};
    // z-index: 0;
    box-shadow: 5px 5px 15px 5px rgba(10, 10, 10, 0.1);
  }

  legend {
    width: 53px;
    padding: 0;
    text-align: left;
    line-height: 11px;
  }

  span {
    text-align: left;
    line-height: 11px;
  }

  button {
    margin: 1rem 0;
    padding: 1rem;
    font-size: 1.1rem;
    letter-spacing: 0.2rem; 
    background: ${props => props.theme.mainDgray};
    color: ${props => props.theme.mainWhite};
    border: 1px solid ${props => props.theme.mainDgray};
    border-radius: 3px;
    transition: color 0.3s linear;
  
    &:hover {
      cursor: pointer;
      background: ${props => props.theme.mainHighlight};
      border: 1px solid ${props => props.theme.mainHighlight};
    }
  
    &:active {
      cursor: pointer;
      background: ${props => props.theme.mainHighlight};
      border: 1px solid ${props => props.theme.mainHighlight};
    }
  }
`;