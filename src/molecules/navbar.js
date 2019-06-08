import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  color: hsla(0, 0%, 0%, 0.8);

  font-size: 1.2em;
  padding: 0.5em;
  text-decoration: none;
  font-family: neuzeit-grotesk, sans-serif;
  :not(:last-of-type) {
    margin-right: 0.4em;
  }
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
