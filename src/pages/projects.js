import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';

import projects from '../data/projects';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 2rem;
  min-height: 60vh;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutPage = ({ location }) => (
  <Layout location={location.pathname}>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <PageTitle> Projects </PageTitle>
      {projects.map((pj, i) => (
        <Project key={i} {...pj} />
      ))}
    </Container>
  </Layout>
);

export default AboutPage;
