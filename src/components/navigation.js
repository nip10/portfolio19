import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MenuItem from './menuitem';
import MenuButton from './menubutton';
import Menu from './menu';
import Navbar from './navbar';

import navigationLinks from '../data/navigation';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <NavWrapper>
        <Navbar dark={this.props.dark} links={navigationLinks} />
        <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} />
        <Menu open={this.state.menuOpen}>
          {navigationLinks.map((el, i) => (
            <MenuItem
              key={i}
              delay={`${i * 0.1}s`}
              onClick={() => {
                this.handleLinkClick();
              }}
              link={el}
            />
          ))}
        </Menu>
      </NavWrapper>
    );
  }
}

Navigation.propTypes = {
  dark: PropTypes.bool,
};
