import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { graphql, StaticQuery } from 'gatsby';

import Hero from '../components/hero';
import Layout from '../components/layout';
import MuitoAmor from '../components/MuitoAmor';
import NossoCardapio from '../components/NossoCardapio';
import SEO from '../components/seo';
import VejaMais from '../components/VejaMais';
import MediaStories from '../components/MediaStories';
import NewsLetterSection from '../components/NewsLetterSection';
import { DimWave } from '../components/Wave';

const HeroSection = styled.section`
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/pattern.png') repeat center;

  p {
    color: #624244;
    font: 14px Muli;
    font-weight: bold;
    max-width: 400px;
    text-align: center;
  }
`;

const H1 = styled.h1`
  font-weight: 400;
  font: 40px Abril;
  margin: 30px 50px;
  max-width: 450px;
  text-align: center;
`;

const IntroSection = styled.section`
  padding: 60px 0 70px;
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/site/pink_bg.png') repeat center
    center;

  p {
    max-width: 600px;
    margin: 0 auto;
    font: 14px Muli;
    line-height: 1.7;
  }

  @media screen and (max-width: 600px) {
    p {
      max-width: calc(100% - 60px);
    }
  }
`;

const ImagineSection = styled.section`
  padding: 80px 0;
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/pattern.png') repeat center;

  .ann-wrapper {
    max-width: 600px;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      max-width: calc(100% - 60px);
    }

    span {
      margin: 40px auto;
    }

    h2 {
      margin-bottom: 20px;
    }

    p {
      font: 14px Muli;
      line-height: 1.7;
    }
  }
`;

const NaMidia = styled.section`
  padding: 80px 0;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .ann-wrapper {
    max-width: 600px;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      max-width: calc(100% - 60px);
    }

    .ann-media {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        margin-bottom: 20px;
        @media screen and (max-width: 600px) { 
          max-width: 180px;
        }
      }
    }
  }
`;

const SectionCover = styled.section`
  height: 440px;
  background: url('http://anneschuartz2.hospedagemdesites.ws/wp-content/uploads/2019/05/21_abr_FEED_IMG_5689-1-1.jpg')
    no-repeat center top;
  background-size: cover;
`;

const SectionAnne = styled.section`
  padding: 60px 0 160px;
  background: url('http://anneschuartz2.hospedagemdesites.ws/wp-content/uploads/2019/06/pink-watery-texture-1-1.png')
    repeat center bottom;

  h2 {
    margin-bottom: 30px;
  }

  p {
    color: #624244;
    font: 14px Muli;
    line-height: 1.7;
  }

  .ann-wrapper {
    max-width: 600px;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      max-width: calc(100% - 60px);
    }
  }
`;

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
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

            return (
              <React.Fragment>
                <SEO title="Sobre a Anne | Anne Schuartz" keywords={[`doces`, `tortas`, `bolos`]} />
                <HeroSection>
                  <div
                    className="as-hero"
                    style={{ padding: '176px 0', margin: '0 auto', maxWidth: 960 }}
                  >
                    <H1>{wordpressData.title}</H1>
                    <p dangerouslySetInnerHTML={{ __html: wordpressData.description }} />
                  </div>
                </HeroSection>
                <IntroSection>
                  <p dangerouslySetInnerHTML={{ __html: wordpressData.intro }} />
                </IntroSection>
                <ImagineSection>
                  <div className="ann-wrapper">
                    <h2>{wordpressData.imagine_section.title}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: wordpressData.imagine_section.description,
                      }}
                    />
                    <DimWave />
                  </div>
                </ImagineSection>
                <NaMidia>
                  <div className="ann-wrapper">
                    <h2>{wordpressData.media_section.title}</h2>
                    <div className="ann-media">
                      <a href={wordpressData.media_section.url_1}>
                        <img src={wordpressData.media_section.image_1.source_url} />
                      </a>
                      <a href={wordpressData.media_section.url_2}>
                        <img src={wordpressData.media_section.image_2.source_url} />
                      </a>
                      <a href={wordpressData.media_section.url_3}>
                        <img src={wordpressData.media_section.image_3.source_url} />
                      </a>
                    </div>
                  </div>
                </NaMidia>
                <SectionCover />
                <SectionAnne>
                  <div className="ann-wrapper">
                    <h2>A Anne</h2>
                    <p>
                      Na tarefa de contar um pouquinho sobre ela, Anne foi surpreendida pelo cara
                      que está sempre ao lado dela, que sonha junto, que apoia ela em tudo e que é o
                      companheiro da vida. A Anne, por Conrado: “Anne é amor e suor Comprometimento
                      e paixão Ternura disfarçada de furacão Anne sempre faz o que pode E o
                      impossível também, Surpreende e conquista Com seu doces inspira Doces com
                      delicioso sabor Doces cheios de amor Na casa dela, sabor e amor Andam de mãos
                      dadas”
                    </p>
                  </div>
                </SectionAnne>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14412.900873752958!2d-49.2879055!3d-25.4307329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe536e4e405d324da!2sAnne+Schuartz+Sweet+Maker!5e0!3m2!1spt-BR!2sbr!4v1559182473338!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="662"
                  frameborder="0"
                  style={{ border: 0, margin: 0 }}
                  allowfullscreen
                />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}

export default IndexPage;
