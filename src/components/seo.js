import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const seo = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Helmet
        titleTemplate="%s | Peter Kerins"
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content:
              'Cork Based Freelance web developer, specialising in graphic design, e-commerce, and the JAMstack',
          },
          {
            name: 'keywords',
            content: 'Cork, Ireland, Web Developer, Web Services',
          },
        ]}
      >
        <link rel="stylesheet" href="https://use.typekit.net/pen6cfn.css" />

        <html lang="en" />
      </Helmet>
    </>
  )
}

export default seo
