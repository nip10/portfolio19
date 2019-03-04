import React from 'react';
import styled from 'styled-components';

import getLogo from './stack/index';

const Wrapper = styled.div`
  margin: 3em 0;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: 'img txt';
  min-height: 400px;
  @media (max-width: 1024px) {
    margin: 1em 0;
    grid-template-columns: 100%;
    grid-template-areas: 'txt';
    min-height: 330px;
  }
`;

const ImgWrapper = styled.div`
  grid-area: img;
  position: relative;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Img = styled.img`
  display: block;
  padding: 1rem;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TextWrapper = styled.div`
  padding: 4rem 3rem 3rem 3rem;
  grid-area: txt;
  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

const Description = styled.p`
  text-align: justify;
  margin-top: 0;
  margin-bottom: 3rem;
`;

const TagsList = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: normal;
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
    </TextWrapper>
  </Wrapper>
);

export default Project;
