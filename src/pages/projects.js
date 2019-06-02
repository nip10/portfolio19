import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Project from '../components/project';

import projects from '../data/projects';

const Container = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 960px;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutPage = () => (
  <>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <PageTitle> Projects </PageTitle>
      {projects.map((pj, i) => (
        <Project key={i} {...pj} />
      ))}
    </Container>
  </>
);

export default AboutPage;
