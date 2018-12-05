import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Service = styled.article`
  padding: 0.5em;
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
