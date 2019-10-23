import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (
    <>
      <Helmet
        titleTemplate="%s | Peter Kerins"
        title={site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: `${site.siteMetadata.description}`,
          },
          {
            name: 'keywords',
            content:
              'Cork, Ireland, Web Developer, Web Services, Web Development, Developer, Web Designer, Development Agency',
          },
        ]}
      >
        <link rel="stylesheet" href="https://use.typekit.net/pen6cfn.css" />

        <html lang="en" />
      </Helmet>
    </>
  )
}
