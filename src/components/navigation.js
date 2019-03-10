import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MenuItem from './menuitem';
import MenuButton from './menubutton';
import Menu from './menu';
import Navbar from './navbar';

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
        <Navbar dark={this.props.dark} />
        <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} />
        <Menu open={this.state.menuOpen}>
          <MenuItem
            delay={'0.1s'}
            onClick={() => {
              this.handleLinkClick();
            }}
          >
            About
          </MenuItem>
          <MenuItem
            delay={'0.2s'}
            onClick={() => {
              this.handleLinkClick();
            }}
          >
            Projects
          </MenuItem>
        </Menu>
      </NavWrapper>
    );
  }
}

Navigation.propTypes = {
  dark: PropTypes.bool,
};
