import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

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

const IndexPage = ({ location }) => (
  <Layout location={location.pathname}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <TextWrapper>
      <HiText> 👋 Hi, I'm Diogo! </HiText>
      <h3> 👨‍💻 I'm a web developer based in Porto.</h3>
    </TextWrapper>
  </Layout>
);

export default IndexPage;
