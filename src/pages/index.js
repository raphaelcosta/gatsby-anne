import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import NossoCardapio from "../components/NossoCardapio"
import MuitoAmor from "../components/MuitoAmor"
import VejaMais from "../components/VejaMais"

const IndexPage = () => (
  <Layout>
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
