import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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

const NotFoundPage = () => (
  <>
    <SEO title="404 Not Found" keywords={[]} />
    <Container>
      <PageTitle> 404 </PageTitle>
      <Text> Sorry, the page you tried cannot be found. </Text>
      <Link to="/">Back to Home</Link>
    </Container>
  </>
);

export default NotFoundPage;
