import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import getLogo from './stack/index';

const Wrapper = styled.div`
  margin: 3em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'img txt';
  min-height: 300px;
  @media (max-width: 900px) {
    margin: 2em 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const ImgWrapper = styled.div`
  grid-area: img;
  position: relative;
  grid-row: 1;
  grid-column: 1;
`;

const Img = styled.img`
  max-width: 100%;
`;

const TextWrapper = styled.div`
  grid-area: txt;
  grid-row: 1;
  grid-column: 2;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-left: 1rem;
  @media (max-width: 900px) {
    grid-row: 2;
    grid-column: 1;
    margin-left: 0;
  }
`;

const Description = styled.p`
  text-align: justify;
  margin: 0;
  padding: 0;
`;

const TagsList = styled.div`
  margin: 0;
  padding: 0;
  > * {
    margin-top: 0.75rem;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  margin-bottom: 1rem;
  & :not(:last-child) {
    margin-right: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  font-weight: normal;
`;

const Button = styled.a`
  background-color: ${p => (p.type === 'primary' ? '#8A74F7' : '#fafafa')};
  padding: 0.8em 1em;
  color: ${p => (p.type === 'primary' ? '#fafafa' : '#8A74F7')};
  border: none;
  font-weight: 700;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  font-size: 0.9rem;
`;

const padding = (top = 0, right = 0, bottom = 0, left = 0) => `${top}rem ${right}rem ${bottom}rem ${left}rem`;

const ButtonImg = styled.img`
  max-width: 1.5rem;
  vertical-align: middle;
  padding: ${p => padding(p.top, p.right, p.bottom, p.left)};
`;

const Project = ({ title, image, description, stack, demo, repo }) => (
  <Wrapper>
    <ImgWrapper>
      <Img src={image} alt={`${title} image`} />
    </ImgWrapper>
    <TextWrapper>
      <Title> {title} </Title>
      <Description> {description} </Description>
      <TagsList>{stack.map(el => getLogo(el.toLowerCase()))}</TagsList>
      <ReactTooltip place="bottom" effect="solid" />
    </TextWrapper>
  </Wrapper>
);

Project.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  stack: PropTypes.array,
  demo: PropTypes.string,
  repo: PropTypes.string,
};

export default Project;
