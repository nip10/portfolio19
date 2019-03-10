import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 4rem;
  line-height: 4rem;
`;

const NavLink = styled(Link)`
  color: #fafafa;
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

const Navbar = ({ dark, links }) => (
  <NavList dark={dark}>
    {links.map((el, i) => (
      <NavItem key={i}>
        {el.url.startsWith('http') ? (
          <NavLink as="a" href={el.url} target="_blank" rel="nofollow noopener">
            {el.name}
          </NavLink>
        ) : (
          <NavLink to={el.url}>{el.name}</NavLink>
        )}
      </NavItem>
    ))}
  </NavList>
);

Navbar.propTypes = {
  dark: PropTypes.bool,
  links: PropTypes.object,
};

export default Navbar;
