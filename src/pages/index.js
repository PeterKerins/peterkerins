import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Work from '../sections/work'
import Services from '../sections/services'
import Contact from '../sections/contact'

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
