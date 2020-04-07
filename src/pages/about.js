import React from "react";
import styled from "styled-components";

import SEO from "../components/seo";

import cv from "../assets/cv.pdf";

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
        My name is <strong>Diogo</strong> and I'm a{" "}
        <strong>full-stack web-developer</strong>. Currently based in{" "}
        <strong>Porto, Portugal.</strong>
      </Text>
      <Text>
        I'm passionate about building web apps with clean, tested and
        maintainable code, using the latest technologies. I have an aptitude for
        problem solving and a hunger for continuous improvement. I am looking to
        work as part of a team where I can contribute to meaningful projects,
        while learning from my peers. I work primarily with a
        JavaScript/TypeScript stack: NodeJS for back-end and React for front-end
        - but picking up new languages or frameworks is not a problem.
      </Text>
      <Text>
        I'm currently in the final year of a Masters degree in Electrical &
        Computer Engineering (Automation branch) at{" "}
        <strong>
          <Link href="https://sigarra.up.pt/feup/en/cur_geral.cur_view?pv_ano_lectivo=2016&pv_curso_id=741&pv_origem=CUR&pv_tipo_cur_sigla=">
            FEUP
          </Link>
        </strong>
        . I'm also working on my Master thesis at{" "}
        <strong>
          <Link href="https://www.wegho.com">Wegho</Link>
        </strong>{" "}
        - "Framework for data ingestion and processing" - doing a mix of
        full-stack web dev (TS, NodeJS, React), Google Cloud Architect and
        DevOps.
      </Text>
      <Text>
        My 3 main areas of interest are web-development, automation (IoT,
        Industrial) and project management.
      </Text>
      <Text>
        My resumé is available{" "}
        <strong>
          <Link href={cv}>here</Link>
        </strong>
        .
      </Text>
    </Container>
  </>
);

export default AboutPage;
