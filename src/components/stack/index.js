/* eslint-disable indent */
import css from './css';
import html from './html';
import javascript from './javascript';
import mongodb from './mongodb';
import nodejs from './nodejs';
import react from './react';

const getLogo = logoName => {
  switch (logoName) {
    case 'css3':
      return css();
    case 'html5':
      return html();
    case 'javascript':
      return javascript();
    case 'mongodb':
      return mongodb();
    case 'nodejs':
      return nodejs();
    case 'react':
      return react();
    default:
      // return null;
      return 'FOO';
  }
};

export default getLogo;
