import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Video from '../components/video';

const Container = styled.main`
  margin-top: 4rem;
  max-height: calc(100vh - 4rem - 6rem - 15rem);
  @media (max-width: 700px) {
    margin-top: 4rem;
  }
`;

const TextWrapper = styled.div`
  min-height: 62vh;
  max-width: 90vw;
  margin: 15rem auto 0 auto;
  padding-left: 5rem;
  color: #fafafa;
  @media (max-width: 700px) {
    padding-left: 0;
  }
`;

const HiText = styled.h1`
  font-size: 3em;
`;

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[]} />
    <Container>
      <Video />
      <TextWrapper>
        <HiText> 👋 Hi, I'm Diogo! </HiText>
        <h3> 👨‍💻 I'm a web developer based in Porto.</h3>
      </TextWrapper>
    </Container>
  </>
);

export default IndexPage;
