import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import NossoCardapio from "../components/NossoCardapio"
import MuitoAmor from "../components/MuitoAmor"
import VejaMais from "../components/VejaMais"

const IndexPage = () => (
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
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-814054608"
      />
      <script>
        {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-814054608');`}
      </script>
    </Helmet>
    <SEO
      title="Encomenda de Doces, Tortas e Bolos | Anne Schuartz"
      keywords={[`doces`, `tortas`, `bolos`]}
    />
    <Hero />
    <NossoCardapio />
    <MuitoAmor />
    <VejaMais />
  </Layout>
)

export default IndexPage
