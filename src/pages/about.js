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
  color: #090909;
  line-height: 1.5rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: #a9982f;
  :hover {
    text-decoration: underline;
  }
`;

const AboutPage = ({ location }) => (
  <Layout location={location.pathname}>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <PageTitle> About </PageTitle>
      <Text>My name is Diogo and I'm a full-stack web-developer. Currently based in Porto, Portugal.</Text>
      <Text>
        I'm passionate about building web apps with clean, tested and maintainable code, using the latest technologies.
        I have an aptitude for problem solving and a hunger for continuous improvement. I am looking to work as part of
        a team where I can contribute to meaningful projects, while learning from my peers. I work primarily with a
        JavaScript/TypeScript stack: NodeJS for back-end and React for front-end - but picking up new languages or
        frameworks is not a problem. I'm currently in the final year of a Masters degree in Electrical & Computer
        Engineering (Automation branch) at FEUP.
      </Text>
      <Text>My 3 main interests are web-development, automation (IoT, Industrial) and project management.</Text>
      <Text>
        My resumé is available <Link href="cv.pdf">here</Link>.
      </Text>
    </Container>
  </Layout>
);

export default AboutPage;
