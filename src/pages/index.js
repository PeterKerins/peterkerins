import React from 'react'
import { Helmet } from 'react-helmet'
import { Services, Contact } from '../components/HomeSections/'
import { Banner } from '../components/Banner'
import Layout from '../components/Layout'

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet title="Home" />
    <Banner />
    <Services />
    <Contact />
  </Layout>
)

export default IndexPage
