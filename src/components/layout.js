import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import Header from './header';
import Footer from './footer';
import Video from './video';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    min-width: 100vw;
    min-height: 100vh;
    /* overflow: hidden; */
    font-family: 'Montserrat';
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRBAMAAABYoVcFAAAAD1BMVEXz9PQnKCi1tra0tbV+fn7KMl1FAAAABHRSTlMABTo1xkK+KwAAAM9JREFUeF6N18ENwzAMxVCGEwj1AkXRAersP1wHiA/kUfh4d7F5Jo+uH2vSkuHabQmsicsTKhWVikpFpaJSUamoVFQqKhWVikpFpaJSUamoVFQqKhWVikpFpaJSUamoVFQqKhWVikpFpaJSUamoVFQqKhWVikpFX1T05tTn0Pdwe3PKTcw1tLwqKhWVikpFpaJSUamoVFQqKhWVikpFpaJSUamoVFQqKhWVikpFpaJSUamoVFQqKhWVikpFpaJSUamoVFQqKhWVEzrJZE3/j/51KRPoGdQNhAAAAABJRU5ErkJggg==);
    background-repeat: repeat;
    background-attachment: fixed;
    background-color: #fafafa;
    @media (max-width: 700px) {
      overflow-y: scroll;
    }
  }
`;

const Container = styled.main`
  margin-top: ${props => (props.isHome ? 0 : '4rem')};
  @media (max-width: 700px) {
    margin-top: ${props => (props.isHome ? 0 : '8rem')};
  }
`;

const Layout = ({ children, location }) => {
  const isHome = location === '/';
  return (
    <>
      {isHome && <Video />}
      <GlobalStyle />
      <Header siteTitle="Diogo Cardoso" dark={!isHome} />
      <Container isHome={isHome}>{children}</Container>
      <Footer dark={location !== '/'} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
