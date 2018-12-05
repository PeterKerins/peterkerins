import React from 'react'
import { graphql } from 'gatsby'
import Work from '../sections/work'
import Services from '../sections/services'
import Layout from '../components/layout'
import Contact from '../sections/contact'
import Helmet from 'react-helmet'

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet title="Home" />
    <Work />
    <Services />
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
