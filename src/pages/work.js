import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import ProjectListing from '../components/projectListing'

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet title="Work" />
    <h2>My Work</h2>
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
