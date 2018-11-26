import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    font-size: 0.8em;
  }
  p {
    margin: 0;
  }
`

export default function footer() {
  return (
    <Footer>
      <p>&copy; 2018</p>
      <Link to="/imprint">Imprint</Link>
    </Footer>
  )
}
