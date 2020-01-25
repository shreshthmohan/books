import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Dir sub page" />
    <h1>dir sub page</h1>
    <p>To check how directories and pages work in gatsby</p>
    <Link to="/">Go back parent</Link>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
