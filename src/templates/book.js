import React from "react"
import { graphql } from "gatsby"

export default ({ pageContext: { book } }) => {
  return <p>{JSON.stringify(book)}</p>
}
