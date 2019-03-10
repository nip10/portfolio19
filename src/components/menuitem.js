import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const slideIn = keyframes`
  from {
    transform: translateX(-2%);
  }
  to {
    transform: translateX(0);
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const shrink = keyframes`
  from {
    width: 95%;
  }
  to {
    width: 90%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fafafa;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: gray;
  }
`;

const MenuItemWrapper = styled.div`
  opacity: 0;
  animation: 1s ${appear} forwards;
  animation-delay: ${props => props.delay};
`;

const MenuItemDiv = styled.div`
  font-size: 1.2rem;
  padding: 1rem 0;
  margin: 0 5%;
  animation: 0.5s ${slideIn} forwards;
  animation-delay: ${props => props.delay};
`;

const Line = styled.div`
  width: 90%;
  height: 1px;
  background: gray;
  margin: 0 auto;
  animation: 0.5s ${shrink} forwards;
  animation-delay: ${props => props.delay};
`;

const MenuItem = props => (
  <MenuItemWrapper delay={props.delay}>
    <MenuItemDiv onClick={props.onClick}>
      {props.link.url.startsWith('http') ? (
        <NavLink as="a" href={props.link.url} target="_blank" rel="nofollow noopener" onClick={props.onClick}>
          {props.link.name}
        </NavLink>
      ) : (
        <NavLink to={props.link.url} onClick={props.onClick}>
          {props.link.name}
        </NavLink>
      )}
    </MenuItemDiv>
    <Line />
  </MenuItemWrapper>
);

MenuItem.propTypes = {
  delay: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.object,
};

export default MenuItem;
