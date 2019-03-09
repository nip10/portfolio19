import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const MenuItemWrapper = styled.div`
  opacity: 0;
  animation: 1s ${appear} forwards;
  animation-delay: ${props => props.delay};
`;

const MenuItemDiv = styled.div`
  font-size: 1.2rem;
  padding: 1rem 0;
  margin: 0 5%;
  cursor: pointer;
  color: ${props => (props.hover ? 'gray' : '#fafafa')};
  transition: color 0.2s ease-in-out;
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

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    return (
      <MenuItemWrapper delay={this.props.delay}>
        <MenuItemDiv
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
          hover={this.state.hover}
        >
          {this.props.children}
        </MenuItemDiv>
        <Line />
      </MenuItemWrapper>
    );
  }
}
