import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuButtonWrapper = styled.div`
  cursor: pointer;
  margin-right: 2rem;
  @media (min-width: 701px) {
    display: none;
  }
`;

const MenuButtonLine = styled.div`
  height: 2px;
  width: 20px;
  background: #fafafa;
  transition: all 0.2s ease;
`;

const MenuButtonLineTop = styled(MenuButtonLine)`
  transform: ${props => (props.open ? 'rotate(45deg)' : 'none')};
  transform-origin: top left;
  margin-bottom: 5px;
`;

const MenuButtonLineMiddle = styled(MenuButtonLine)`
  opacity: ${props => (props.open ? 0 : 1)};
  transform: ${props => (props.open ? 'translateX(-16px)' : 'none')};
`;

const MenuButtonLineBottom = styled(MenuButtonLine)`
  transform: ${props => (props.open ? 'translateX(-1px) rotate(-45deg)' : 'none')};
  transform-origin: top left;
  margin-top: 5px;
`;

export default class MenuButton extends React.Component {
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

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <MenuButtonWrapper
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
              this.handleClick();
            }
        }
      >
        <MenuButtonLineTop open={this.state.open} />
        <MenuButtonLineMiddle open={this.state.open} />
        <MenuButtonLineBottom open={this.state.open} />
      </MenuButtonWrapper>
    );
  }
}

MenuButton.propTypes = {
  onClick: PropTypes.func,
};
