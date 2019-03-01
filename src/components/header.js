import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Navbar from './navbar';

const HeaderWrapper = styled.header`
  background: transparent;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  flex-wrap: wrap;
  top: 0px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  height: 3rem;
  line-height: 3rem;
  margin-left: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <StyledLink to="/"> {siteTitle} </StyledLink>
    <Navbar />
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
