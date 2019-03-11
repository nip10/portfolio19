import React from 'react';
import styled from 'styled-components';
import styledcomponentslogo from './styled-components-logo.png';

const Img = styled.img`
  height: 40px;
  background-color: #333;
`;

const StyledComponents = () => {
  return (
    <Img
      data-tip="Styled Components"
      key="styledcomponents-icon-svg"
      src={styledcomponentslogo}
      alt="Styled Components Logo"
    />
  );
};

export default StyledComponents;
