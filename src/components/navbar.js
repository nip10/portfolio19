import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

const NavItem = styled.li`
  height: 3rem;
  line-height: 3rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  margin-right: 2rem;
  letter-spacing: 2px;
  font-weight: 700;
  :hover {
    border-bottom: 3px solid #f0db4f;
  }
`;

const Navbar = () => (
  <NavList>
    <NavItem>
      <NavLink to="/about"> About </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/projects"> Projects </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/contact"> Contact </NavLink>
    </NavItem>
  </NavList>
);

export default Navbar;
