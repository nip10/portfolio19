import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TextWrapper = styled.div`
  min-height: 62vh;
  max-width: 90vw;
  margin: 0 auto;
  padding: 13rem 0 0 12rem;
  color: white;
  @media (max-width: 800px) {
    padding: 13rem 0 0 5rem;
  }
  @media (max-width: 500px) {
    padding: 13rem 0 0 2rem;
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
