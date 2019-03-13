import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Service = styled.article`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
  align-items: center;
  .service-information {
    h3 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
  &:nth-of-type(even) .service-information {
    order: -1;
  }
`

export default ({ details }) => {
  return (
    <Service>
      {details.data.service_icon.localFile && (
        <Img
          style={{
            borderRadius: '50%',
            marginBottom: '2em',
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
