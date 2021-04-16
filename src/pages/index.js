import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Services from '../components/sections/services'
import Contact from '../components/sections/contact'
import Banner from '../components/banner'

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet title="Home" />
    <Banner />
    <Services />
    <Contact />
  </Layout>
)

export default IndexPage
