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
      <h1> 👋 Hi, I'm Diogo! </h1>
      <h3> 👨‍💻 I'm a web developer based in Porto.</h3>
      <p> ⚡ Currently on the last year of a masters degree. Available for freelancing/remote jobs. </p>
    </TextWrapper>
  </Layout>
);

export default IndexPage;
