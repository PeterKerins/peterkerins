import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Work from '../components/sections/work'
import Services from '../components/sections/services'
import Contact from '../components/sections/contact'
import Banner from '../components/banner'

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet title="Home" />
    <Banner />
    <Services />
    <Work />
    <Contact />
  </Layout>
)
export const query = graphql`
  query {
    allPrismicProject {
      edges {
        node {
          prismicId
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`
export default IndexPage
