import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import Header from '../components/header';
import Footer from '../components/footer';
import Transition from '../components/transition';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  /* @import url('https://fonts.googleapis.com/css?family=Montserrat'); */
  body {
    font-family: 'Montserrat', sans-serif;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRBAMAAABYoVcFAAAAD1BMVEXz9PQnKCi1tra0tbV+fn7KMl1FAAAABHRSTlMABTo1xkK+KwAAAM9JREFUeF6N18ENwzAMxVCGEwj1AkXRAersP1wHiA/kUfh4d7F5Jo+uH2vSkuHabQmsicsTKhWVikpFpaJSUamoVFQqKhWVikpFpaJSUamoVFQqKhWVikpFpaJSUamoVFQqKhWVikpFpaJSUamoVFQqKhWVikpFX1T05tTn0Pdwe3PKTcw1tLwqKhWVikpFpaJSUamoVFQqKhWVikpFpaJSUamoVFQqKhWVikpFpaJSUamoVFQqKhWVikpFpaJSUamoVFQqKhWVEzrJZE3/j/51KRPoGdQNhAAAAABJRU5ErkJggg==);
    background-repeat: repeat;
    background-attachment: fixed;
    background-color: #fafafa;
    @media (max-width: 700px) {
      overflow-y: scroll;
    }
  }
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  return (
    <>
      <GlobalStyle />
      <Header siteTitle="Diogo Cardoso" dark={!isHome} isHome={isHome} />
      <Transition location={location}>{children}</Transition>
      <Footer dark={!isHome} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
