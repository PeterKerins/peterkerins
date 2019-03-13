import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
// import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Banner from './Banner'
import Seo from './seo'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query HomeSiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Seo />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Banner />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 998,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
            <Footer />
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
