/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './Footer';
import './layout.css';
import { GlobalStyles } from '../shared/globalStyles';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <GlobalStyles />
        <Header />
        <main>{children}</main>
        <Footer />
      </React.Fragment>
    )}
  />
);

export default Layout;
