import React from 'react';
import { styled } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const MyArrow = styled(ChevronRightIcon)({
  fontSize: '4rem',
});

export default function StyledComponents() {
  return <MyArrow>Styled Components</MyArrow>;
}
