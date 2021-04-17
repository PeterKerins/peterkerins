import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Spring } from 'react-spring/renderprops'
import { Helmet } from 'react-helmet'

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-gap: 1em;
  align-items: center;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    .about-content {
      order: 2;
    }
  }
`

export default function About({ data }) {
  return (
    <>
      <Helmet title="About" />
      <AboutWrapper>
        <Spring from={{ position: 'relative', left: -800 }} to={{ left: 0 }}>
          {props => (
            <div style={props} className="about-content">
              <h1>{data.prismicAboutPage.data.header.text}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicAboutPage.data.about_me_content.html,
                }}
              />
            </div>
          )}
        </Spring>

        {data.prismicAboutPage.data.header_image.localFile && (
          <Spring
            from={{ position: 'relative', right: -800 }}
            to={{ right: 0 }}
          >
            {props => (
              <Img
                style={props}
                fluid={
                  data.prismicAboutPage.data.header_image.localFile
                    .childImageSharp.fluid
                }
              />
            )}
          </Spring>
        )}
      </AboutWrapper>
    </>
  )
}
export const query = graphql`
  query {
    prismicAboutPage {
      data {
        header {
          text
        }
        header_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        about_me_content {
          html
        }
      }
    }
  }
`
