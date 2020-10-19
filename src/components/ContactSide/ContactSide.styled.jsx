import styled from 'styled-components';

export const StyledContactSide = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background: ${props => props.theme.mainLgray};
height: 100vh;
border-left: 1px solid ${props => props.theme.mainDgray};
text-align: center;
padding: 10px 5px;
position: fixed;
top: 0;
right: 0;
transition: transform 0.3s ease-in-out;
transform: ${({ contactSideOpen }) => contactSideOpen ? 'translateX(0)' : 'translateX(+130%)'};
max-width: ${props => props.theme.mobile};

.contactSide-menu {
  width: 90%;
  margin: 0 auto;
}

.contact-tel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

@media (max-width: ${props => props.theme.mobile}) {
  width: 100%;
}

h2, p {
  color: ${props => props.theme.mainBgColor};
}

a {
  font-size: 1rem;
  text-transform: uppercase;
  padding: 1rem 0;
  letter-spacing: 0.2rem;
  color: ${props => props.theme.mainBgColor};
  text-decoration: none;
  transition: color 0.3s linear;
  
  @media (max-width: ${props => props.theme.mobile}) {
    text-align: center;
  }

  &:hover {
    color: ${props => props.theme.mainHighlight};
  }
}

.contact-side form {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
}

.contact-side label {
  margin: 5px;
  color: ${props => props.theme.mainBgColor};
  display: flex;
  flex-direction: row;
  width: 100%;
}

.contact-side input, .contact-side textarea {
  padding: 5px;
  border-radius: 3px;
  border: none;
}

.contact-submit {
  margin: 1rem 0;
  padding: 1rem;
  background: ${props => props.theme.mainDgray};
  color: ${props => props.theme.mainWhite};
  border: 1px solid ${props => props.theme.mainDgray};
  border-radius: 3px;

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

.close-side {
  padding: 0.5rem;
  background: ${props => props.theme.mainDgray};
  color: ${props => props.theme.mainWhite};
  border: 1px solid ${props => props.theme.mainDgray};
  border-radius: 3px;

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