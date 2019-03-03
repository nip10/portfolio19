import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Navbar from './navbar';

const HeaderWrapper = styled.header`
  background-color: ${props => (props.dark ? '#333' : 'transparent')};
  height: 4rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
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

const Header = ({ siteTitle, dark }) => (
  <HeaderWrapper dark={dark}>
    <StyledLink to="/"> {siteTitle} </StyledLink>
    <Navbar dark={dark} />
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
