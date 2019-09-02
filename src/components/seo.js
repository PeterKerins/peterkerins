import React from 'react'
import Helmet from 'react-helmet'

const seo = () => {
  return (
    <>
      <Helmet
        titleTemplate="%s | Peter Kerins"
        title={'Peter Kerins Web Development'}
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
