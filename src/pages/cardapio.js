import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import CardapioBox from '../components/CardapioBox';
import HeroCardapio from '../components/HeroCardapio';
import ConfiraCardapioBox from '../components/ConfiraCardapioBox';

const StyledCardapioBoxContainer = styled.div`
  background: #210305;
`;

const StyledOverlay = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
  bottom: 0;
  height: 150px;
  left: 0;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  z-idex: 5;
`;

const CardapioPage = () => (
  <Layout>
    <React.Fragment>
      <Helmet>
        <script>
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '374116829696592');
    fbq('track', 'PageView');`}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=374116829696592&ev=PageView&noscript=1"
  />`}
        </noscript>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-814054608" />
        <script>
          {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-814054608');`}
        </script>
        <script>
          {`function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-814054608/Xm6_CI_K5H4Q0PmVhAM',
            'event_callback': callback
        });
        return false;
      }`}
        </script>
      </Helmet>
      <HeroCardapio />
      <StyledCardapioBoxContainer>
        <StaticQuery
          query={graphql`
            {
              allWordpressWpCardapio {
                edges {
                  node {
                    id
                    date
                    status
                    slug
                    title
                    excerpt
                    featured_media {
                      source_url
                    }
                    acf {
                      item_cardapio_ativado
                    }
                  }
                }
              }
            }
          `}
          render={props =>
            props.allWordpressWpCardapio.edges.map(produto => {
              return produto.node.acf.item_cardapio_ativado === true ? (
                <CardapioBox
                  backgroundUrl={produto.node.featured_media.source_url}
                  key={produto.node.id}
                  to={`/cardapio/${produto.node.slug}`}
                >
                  <p>{produto.node.title}</p>
                  <StyledOverlay />
                </CardapioBox>
              ) : null;
            })
          }
        />
      </StyledCardapioBoxContainer>
      <ConfiraCardapioBox />
    </React.Fragment>
  </Layout>
);

export default CardapioPage;
