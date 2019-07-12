import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Overdrive from 'react-overdrive'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { FaLink } from 'react-icons/fa'

import Layout from '../components/layout'

const ProjectGridWrapper = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  .projectTitle {
    grid-column: 1 / -1;
  }
  .projectDescription {
    align-self: center;
  }
  .projectGallery {
    grid-column: 1/-1;
  }
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`
const ProjectImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1em;
`

export default ({ data }) => {
  const project = data.prismicProject
  return (
    <Layout>
      <Helmet
        title={project.data.title.text}
        meta={[
          {
            name: 'description',
            content:
              'Cork Based Freelance web developer, specialising in graphic design, e-commerce, and the JAMstack',
          },
          {
            name: 'keywords',
            content: 'Cork, Ireland, Web Developer, Web Services',
          },
          {
            name: 'og:image',
            content: `${project.data.featured_img.url}`,
          },
        ]}
      />

      <ProjectGridWrapper>
        <h1 className="projectTitle">{project.data.title.text}</h1>
        {project.data.featured_img.localFile && (
          <Overdrive id={`${project.data.title.text}-cover`} duration={500}>
            <Img
              className="projectFeaturedImage"
              fluid={project.data.featured_img.localFile.childImageSharp.fluid}
            />
          </Overdrive>
        )}
        <div className="projectDescription">
          <h3 className="external-link">
            <a
              href={project.data.website.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.data.title.text}
            </a>
            <FaLink
              className="floater"
              style={{
                // float: 'right',
                opacity: 0,
              }}
            />
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: project.data.description.html }}
          />
        </div>
        <ProjectImageGallery className="projectGallery">
          {project.data.project_imgs.map(
            ({ project_img }, i) =>
              project_img.localFile && (
                <Img
                  key={i.toString()}
                  fluid={project_img.localFile.childImageSharp.fluid}
                />
              )
          )}
        </ProjectImageGallery>
      </ProjectGridWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($prismicId: String!) {
    prismicProject(prismicId: { eq: $prismicId }) {
      data {
        title {
          html
          text
        }
        featured_img {
          url
          localFile {
            childImageSharp {
              fluid(maxWidth: 1300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        project_imgs {
          project_img {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        website {
          url
        }
        description {
          html
        }
      }
    }
  }
`
