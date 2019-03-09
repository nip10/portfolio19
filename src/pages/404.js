import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem;
  min-height: 60vh;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const Text = styled.p`
  color: rgba(25, 25, 25, 0.9);
  line-height: 1.5rem;
`;

const NotFoundPage = ({ location }) => (
  <Layout location={location.pathname}>
    <SEO title="404 Not Found" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <PageTitle> 404 </PageTitle>
      <Text> Sorry, the page you tried cannot be found. </Text>
      <Link to="/">Back to Home</Link>
    </Container>
  </Layout>
);

export default NotFoundPage;
