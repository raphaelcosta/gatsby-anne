import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import AnnePageComponent from '../components/AnnePageComponent';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressPage {
          edges {
            node {
              id
              title
              acf {
                title
                description
                intro
                imagine_section {
                  title
                  description
                }
                section_anne {
                  title
                  description
                }
                section_image {
                  id
                  source_url
                }
                media_section {
                  title
                  image_1 {
                    id
                    source_url
                  }
                  url_1
                  image_2 {
                    id
                    source_url
                  }
                  url_2
                  image_3 {
                    id
                    source_url
                  }
                  url_3
                }
              }
            }
          }
        }
      }
    `}
    render={props => {
      const wordpressData = props.allWordpressPage.edges['1'].node.acf;
      return <AnnePageComponent wordpressData={wordpressData} />;
    }}
  />
);

export default IndexPage;
