import React from 'react'
import { graphql } from 'gatsby'
import ProjectListing from '../components/projectListing'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet title="Projects" />
    <h3>My Projects</h3>
    <div
      className="projects-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gridGap: '2em',
      }}
    >
      {data.allPrismicProject.edges.map(({ node }) => (
        <ProjectListing key={node.prismicId} details={node} />
      ))}
    </div>
  </Layout>
)
export const query = graphql`
  query {
    allPrismicProject(sort: { fields: [first_publication_date], order: DESC }) {
      edges {
        node {
          prismicId
          uid
          data {
            title {
              text
            }
            featured_img {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1280) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export default IndexPage
