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
      {
        allWordpressPage {
          edges {
            node {
              id
              title
              acf {
                footer {
                  location {
                    title
                    address
                    url
                  }
                  schedule {
                    title
                    content
                  }
                  contact {
                    title
                    email
                    whatsapp
                    fixo
                    social_networks {
                      facebook
                      instagram
                      spotify
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={props => {
      const footerData = props.allWordpressPage.edges['0'].node.acf.footer;
      return (
        <React.Fragment>
          <GlobalStyles />
          <Header socialNetworks={footerData.contact} />
          <main>{children}</main>
          <Footer {...footerData} />
        </React.Fragment>
      );
    }}
  />
);

export default Layout;
