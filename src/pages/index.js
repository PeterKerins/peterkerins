import React from 'react'
import { Helmet } from 'react-helmet'
import { Services, Contact } from '../components/HomeSections/'
import { Banner } from '../components/Banner'

const IndexPage = ({ data }) => (
  <>
    <Helmet title="Home" />
    <Banner />
    <Services />
    <Contact />
  </>
)

export default IndexPage
