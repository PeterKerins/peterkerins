import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    font-size: 0.9em;
  }
  p {
    margin: 0;
  }
`

function Footer() {
  return (
    <FooterStyles>
      <p>&copy; {new Date().getFullYear()}</p>
      <Link to="/imprint">Imprint</Link>
    </FooterStyles>
  )
}

export default Footer
