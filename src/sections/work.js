import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import ProjectListing from './projectListing'

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

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
        <ProjectsWrapper className="projectsWrapper">
          {data.allPrismicProject.edges.map(({ node }) => (
            <ProjectListing key={node.prismicId} details={node} />
          ))}
        </ProjectsWrapper>
      </section>
    )}
  />
)
