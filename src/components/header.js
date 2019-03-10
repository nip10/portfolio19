import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Navigation from './navigation';

const HeaderWrapper = styled.header`
  background-color: ${props => (props.dark ? '#333' : 'transparent')};
  height: 4rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  z-index: 200;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  height: 4rem;
  line-height: 4rem;
  margin-left: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Header = ({ dark, siteTitle }) => {
  return (
    <HeaderWrapper dark={dark}>
      <StyledLink to="/"> {siteTitle} </StyledLink>
      <Navigation dark={dark} />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  dark: PropTypes.bool,
};

export default Header;
