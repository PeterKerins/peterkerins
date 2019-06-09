import React from 'react'
import { Link } from 'gatsby'
import Nav from './molecules/navbar'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 1.45rem;
  max-width: 998px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  @media (min-width: 600px) {
    justify-content: space-between;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div className="title">
      <h1>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Nav />
  </HeaderWrapper>
)

export default Header
