import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TextWrapper = styled.div`
  min-height: 62vh;
  max-width: 90vw;
  margin: 15rem auto 0 auto;
  padding-left: 5rem;
  color: white;
  @media (max-width: 700px) {
    padding-left: 0;
  }
`;

const IndexPage = ({ location }) => (
  <Layout location={location.pathname}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <TextWrapper>
      <h1> 👋 Hello, world ! </h1>
      <h2>I'm Diogo Cardoso, a full-stack web developer. 👨‍💻</h2>
      <p>I make amazing, modern websites. ⚡</p>
    </TextWrapper>
  </Layout>
);

export default IndexPage;
