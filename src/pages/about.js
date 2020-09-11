import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';

import cv from '../assets/cv2020.pdf';

const Container = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 960px;
  padding: 2rem;
  /* min-height: 60vh; */
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

const AboutPage = () => (
  <>
    <SEO title="About" keywords={[]} />
    <Container>
      <PageTitle> About </PageTitle>
      <Text>
        My name is <strong>Diogo</strong> and I'm a <strong>full-stack web-developer</strong>. Currently based in{' '}
        <strong>Porto, Portugal.</strong>
      </Text>
      <Text>
        I'm passionate about building web apps with <strong>clean, tested and maintainable code</strong>, using the
        latest technologies. I have an aptitude for problem solving and a hunger for continuous improvement. I am
        looking to work as part of a team where I can contribute to meaningful projects, while learning from my peers. I
        work primarily with a <strong>JavaScript/TypeScript stack</strong>: NodeJS for back-end and React for front-end
        - but picking up new languages or frameworks is not a problem.
      </Text>
      <Text>
        I'm currently finishing a Masters degree in Electrical & Computer Engineering (Automation branch) at{' '}
        <strong>
          <Link href="https://sigarra.up.pt/feup/en/cur_geral.cur_view?pv_ano_lectivo=2016&pv_curso_id=741&pv_origem=CUR&pv_tipo_cur_sigla=">
            FEUP
          </Link>
        </strong>
        . My Master thesis - "Framework for data ingestion and processing" - was done at{' '}
        <strong>
          <Link href="https://www.wegho.com">Wegho</Link>
        </strong>{' '}
        and involved different areas such as full-stack web dev (NodeJS, React) and DevOps.
      </Text>
      <Text>My 3 main areas of interest are web-development, automation (IoT, Industrial) and project management.</Text>
      <Text>
        My resumé is available{' '}
        <strong>
          <Link href={cv}>here</Link>
        </strong>
        .
      </Text>
      <Text>
        I'm currently working as a full-stack web developer at{' '}
        <strong>
          <Link href="https://www.wegho.com">Wegho</Link>
        </strong>{' '}
        working on multiple projects involving: legacy .net mvc5 applications, React, NodeJS, Ionic, and a small
        ecommerce website using wooCommerce.
      </Text>
    </Container>
  </>
);

export default AboutPage;
