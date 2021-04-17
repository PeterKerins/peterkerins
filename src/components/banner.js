import React from 'react'
import styled from 'styled-components'

const BannerStyles = styled.div`
  height: 60vh;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: #339999;
  margin-top: -1.45rem;
  margin-bottom: 1.45rem;
`
const BannerContentStyles = styled.div`
  max-width: 998px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1em;
  color: white;
  h2 {
    @media (max-width: 835px) {
      font-size: 1.8em;
    }
  }
`

const Banner = () => {
  return (
    <BannerStyles>
      <BannerContentStyles>
        <h2>
          Cork Based Web Developer, specialising in: web development, ecommerce,
          graphic design, branding &amp; logo design, and the JAMstack
        </h2>
      </BannerContentStyles>
    </BannerStyles>
  )
}

export { Banner }
