import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 730px) {
    width: 100%;
    margin: ${props => (props.dark ? '0' : '0 1rem')};
    background-color: ${props => (props.dark ? '#333' : 'transparent')};
    justify-content: space-around;
  }
`;

const NavItem = styled.li`
  height: 4rem;
  line-height: 4rem;
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
  @media (max-width: 650px) {
    :last-child {
      margin: 0;
    }
  }
`;

const Navbar = ({ dark }) => (
  <NavList dark={dark}>
    <NavItem>
      <NavLink to="/about"> About </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/projects"> Projects </NavLink>
    </NavItem>
    <NavItem>
      <NavLink as="a" href="https://blog.diogocardoso.me" target="_blank" rel="nofollow noopener">
        Blog
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/contact"> Contact </NavLink>
    </NavItem>
  </NavList>
);

export default Navbar;
