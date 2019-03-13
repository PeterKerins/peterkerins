import React from 'react'
import styled from 'styled-components'

const BannerWrapper = styled.div`
  height: 60vh;
  width: 100vw;
  background-color: #399;
  margin-top: -1.45rem;
  margin-bottom: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 4.5rem;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h2 {
    font-size: 3.8rem;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
const Banner = () => {
  return (
    <BannerWrapper>
      <h1>Peter Kerins</h1>
      <h2>Web Development</h2>
    </BannerWrapper>
  )
}

export default Banner
