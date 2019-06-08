import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ServiceListing from '../serviceListing'

export default () => (
  <StaticQuery
    query={graphql`
      query ServicesQuery {
        allPrismicServices(
          filter: {
            data: {
              service_title: {
                text: {
                  in: [
                    "Web Development"
                    "Web Design"
                    "Branding & Logo Design"
                  ]
                }
              }
            }
          }
          sort: { fields: [data___order], order: ASC }
        ) {
          edges {
            node {
              prismicId
              data {
                service_title {
                  text
                }
                service_description {
                  text
                }
                service_icon {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1080) {
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
      <section id="services">
        <h2>Services</h2>
        <div>
          {data.allPrismicServices.edges.map(({ node }) => (
            <ServiceListing key={node.prismicId} details={node} />
          ))}
        </div>
      </section>
    )}
  />
)
