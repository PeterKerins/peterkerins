import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  color: #000;
  font-size: 1.2em;
  margin-right: 0.5em;
  text-decoration: none;
  font-family: neuzeit-grotesk, sans-serif;
`

export default function navbar() {
  return (
    <nav className="menu-items">
      <StyledLink
        activeStyle={{
          color: '#339999',
        }}
        to="/"
      >
        Home
      </StyledLink>
      <StyledLink
        activeStyle={{ color: '#339999' }}
        partiallyActive={true}
        to="/projects"
      >
        Projects
      </StyledLink>
      <StyledLink activeStyle={{ color: '#339999' }} to="/about">
        About
      </StyledLink>
      <StyledLink activeStyle={{ color: '#339999' }} to="/contact">
        Contact
      </StyledLink>
    </nav>
  )
}
