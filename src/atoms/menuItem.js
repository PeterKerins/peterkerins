import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PageLink = styled(Link)`
  color: #000;
  font-size: 1.2em;
  margin-right: 0.5em;
  text-transform: capitalize;
  :before {
    content: '​'; /* copy-paste a zero-width-space (&#8203;) character */
  }
`

export default function menuItem(props) {
  return <PageLink to={props.link}>{props.link}</PageLink>
}
