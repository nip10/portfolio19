import React from 'react';
import styled from 'styled-components';

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
  color: rgba(25, 25, 25, 0.8);
  line-height: 1.5rem;
`;

const AboutPage = ({ location }) => (
  <Layout location={location.pathname}>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <PageTitle> Projects </PageTitle>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat modi facilis dolorum dolores incidunt. A saepe
        cumque velit impedit aperiam distinctio, quo assumenda eaque unde, iure repellendus nemo, ullam amet.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat modi facilis dolorum dolores incidunt. A saepe
        cumque velit impedit aperiam distinctio, quo assumenda eaque unde, iure repellendus nemo, ullam amet.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat modi facilis dolorum dolores incidunt. A saepe
        cumque velit impedit aperiam distinctio, quo assumenda eaque unde, iure repellendus nemo, ullam amet.
      </Text>
    </Container>
  </Layout>
);

export default AboutPage;
