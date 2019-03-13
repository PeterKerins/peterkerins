import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import ProjectListing from '../components/projectListing'

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        allPrismicProject(
          sort: { fields: [first_publication_date], order: DESC }
          limit: 3
        ) {
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
                      fluid(maxWidth: 980) {
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
    `}
    render={data => (
      <section id="work">
        <h2>
          <Link to="projects">Projects</Link>
        </h2>
        <div
          className="projectsWrapper"
          style={{
            display: 'grid',
            // gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gridTemplateColumns: 'repeat(2,1fr)',
            gridGap: '2em',
          }}
        >
          {data.allPrismicProject.edges.map(({ node }) => (
            <ProjectListing key={node.prismicId} details={node} />
          ))}
        </div>
      </section>
    )}
  />
)
