import React from "react"

export default ({ pageContext: { book } }) => {
  return <p>{JSON.stringify(book)}</p>
}
