import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import { ThemeProvider } from '@gympass/design-system';
import { Navigation, Documentation, Header, Summary } from '../';

const GlobalStyle = createGlobalStyle`
  #gatsby-focus-wrapper, #___gatsby {
    height: 100%;
  }

  html, body  {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: 'Open Sans';
    color: #666;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 166px;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'Header Header Header'
    'Navigation Documentation Summary';
  height: 100%;
`;

const Layout = ({ nav, doc }) => (
  <ThemeProvider>
    <GlobalStyle />
    <Grid>
      <Header />
      <Navigation items={nav} />
      <Documentation mdx={doc} />
      <Summary>Alou</Summary>
    </Grid>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
