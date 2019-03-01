import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import Header from './header';
import Footer from './footer';
import Video from './video';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    min-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    font-family: 'Montserrat';
  }
`;

const Layout = ({ children, location }) => (
  <>
    {location === '/' && <Video />}
    <GlobalStyle />
    <Header siteTitle="Diogo Cardoso" />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
