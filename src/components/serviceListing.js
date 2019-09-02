import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Service = styled.article`
  padding: 0.5em;
  margin-bottom: 2em;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  align-items: center;

  .service-information {
    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
    margin-bottom: 2.5em;
    &:nth-of-type(even) .service-information {
      order: -1;
    }
  }
`

export default ({ details }) => {
  return (
    <Service>
      {details.data.service_icon.localFile && (
        <Img
          style={{
            marginBottom: '1rem',
          }}
          fluid={details.data.service_icon.localFile.childImageSharp.fluid}
        />
      )}
      <div className="service-information">
        <h3>{details.data.service_title.text}</h3>
        <p>{details.data.service_description.text}</p>
      </div>
    </Service>
  )
}
