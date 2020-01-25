import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const DirIndexPage = () => (
  <Layout>
    <SEO title="Dir Index" />
    <h1>Hi from the dir index page</h1>
    <p>Welcome to dir index</p>
    <Link to="/dir1/subpage">Go to the subpage</Link>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DirIndexPage
