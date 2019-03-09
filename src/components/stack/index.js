/* eslint-disable indent */
import css from './css';
import html from './html';
import javascript from './javascript';
import mongodb from './mongodb';
import nodejs from './nodejs';
import react from './react';
import typescript from './typescript';
import express from './express';
import socketio from './socketio';
import jest from './jest';
import postgresql from './postgresql';
import gatsby from './gatsby';
import styledcomponents from './styledcomponents';

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
    case 'typescript':
      return typescript();
    case 'express':
      return express();
    case 'socketio':
      return socketio();
    case 'jest':
      return jest();
    case 'postgresql':
      return postgresql();
    case 'gatsby':
      return gatsby();
    case 'styled components':
      return styledcomponents();
    default:
      return null;
  }
};

export default getLogo;
