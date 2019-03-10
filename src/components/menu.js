import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  height: ${props => (props.open ? '100vh' : 0)};
  width: 100vw;
  background: #333;
  transition: height 0.3s ease;
  z-index: 201;
`;

const MenuListWrapper = styled.div`
  padding-top: 3rem;
`;

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    return (
      <MenuWrapper open={this.state.open}>
        {this.state.open && <MenuListWrapper>{this.props.children}</MenuListWrapper>}
      </MenuWrapper>
    );
  }
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
